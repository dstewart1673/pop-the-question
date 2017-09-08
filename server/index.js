const express = require('express');
const path = require('path');
const passport = require('passport');
const util = require('util');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const GitHubStrategy = require('passport-github2').Strategy;
const partials = require('express-partials');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoUrl = process.env.MONGOLAB_URI;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const app = express();
const PORT = process.env.PORT || 5000;

//enables persistent login sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
//establishes user login and creates new user if not previously logged in
passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://pop-the-question.herokuapp.com/auth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
  function parsed (obj) {
    return obj;
  };
  const prof = mongodb.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const users = db.collection('users');
    users.findOne({ gitID: profile.id }, (err, result) => {
      if (err) throw err;
      if (!result) {
        const newUser = { "_id": ObjectID(), "gitID": profile.id, "polls": [] }
        users.insertOne(newUser, (err, res) => {
          return parsed(newUser);
        });
      } else {
        return parsed(result)
      }
    });
  });
  return prof;
}));

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


//Redirects user to GitHub's authentication page.  Once logged in, client will be redirected to their user page.
app.get('/api/login',
  passport.authenticate('github'),
  (req, res) => {
  //client is sent to GitHub, so this is not used.
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

//Provides logged-in user's created poll data.
app.get('/api/user',
  ensureAuthenticated(req, res),
  (req, res) => {
    mongodb.connect(mongoUrl, (err, db) => {
      if (err) throw err;
      const users = db.collection('users');
      users.findOne({ _id = User.id }, (err, result) => {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    });
  }
});

//Provides list of all polls regardless of login status.
//TODO create mongo call for all polls.
app.get('/api/polls', (req, res) => {

})

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
