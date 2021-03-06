

const express = require('express');
const path = require('path');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const util = require('util');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const partials = require('express-partials');
const mongodb = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
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
  mongodb.connect(mongoUrl, (err, db) => {
    const users = db.collection('users');
    users.findOne({
      id: id,
    }, (err, user) => {
      done(err, user);
      db.close();
    });
  });
});

//establishes user login and creates new user if not previously logged in
passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
  process.nextTick(() => {
    const prof = parsed(profile);
    if (!req.user) {
      mongodb.connect(mongoUrl, (err, db) => {
        if (err)
          throw err;
        const users = db.collection('users');
        users.findOne({
          id: prof.id,
        }, (err, result) => {
          if (err)
            throw err;
          if (!result) {
            console.log('bleep' + prof.displayName);
            const newUser = {
              id: prof.id,
              name: prof.displayName,
            };
            users.insertOne(newUser, (err, res) => {
              return done(null, parsed(newUser));
              db.close();
            });
          } else {
            return done(null, parsed(result));
            db.close();
          }
        });
      });
    } else {
      return done(null, req.user);
    };

    function parsed(obj) {
      return obj;
    };
  });
}));

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//Redirects user to GitHub's authentication page.
//Once logged in, client will be redirected to their user page.
app.get('/login', passport.authenticate('github'), (req, res) => {
  //client is sent to GitHub, so this is not used.
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/auth/callback', passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

//Provides logged-in user's username and created poll data.
app.get('/api/user', ensureAuthenticated, (req, res) => {
  mongodb.connect(mongoUrl, (err, db) => {
    if (err)
      throw err;
    const users = db.collection('users');
    users.findOne({
      id: req.user.id,
    }, (err, result) => {
      if (err)
        throw err;
      const userName = result.name;
      db.collection('polls').find({ creatorID: req.user.id }).toArray((err, results) => {
        if (err)
          throw err;
        const userPolls = results;
        const data = {
          name: userName,
          polls: userPolls,
        };
        res.send(JSON.stringify(data));
        db.close();
      });
    });
  });
});

//TODO: Make this return only id, title, and count of responses
//Provides list of all polls regardless of login status.
app.get('/api/polls', (req, res) => {
  mongodb.connect(mongoUrl, (err, db) => {
    if (err)
      throw err;
    const polls = db.collection('polls');
    polls.find({}).toArray((err, results) => {
      if (err)
        throw err;
      res.send(results);
      db.close();
    });
  });
});

//
app.get('/api/poll/:pollID', (req, res) => {
  mongodb.connect(mongoUrl, (err, db) => {
    if (err)
      throw err;
    const polls = db.collection('polls');
    polls.findOne({
      _id: ObjectID(req.params.pollID),
    }, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(JSON.stringify(result));
      db.close();
    });
  });
});

app.post('/api/addpoll', ensureAuthenticated, (req, res) => {
  const newPoll = {
    creator: req.user.name,
    creatorID: req.user.id,
    title: req.body.title,
    options: req.body.options,
  };
  mongodb.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const polls = db.collection('polls');
    polls.insertOne(newPoll, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify({ id: result._id }));
      db.close();
    });
  });
});

app.post('/api/removepoll', ensureAuthenticated, (req, res) => {
  mongodb.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    db.collection('polls').deleteOne({ _id: ObjectID(req.body.pollID) }, (err, obj) => {
      if (err)
        throw err;
      console.log('One poll deleted');
      db.close();
    });
  });
  res.end();
});

app.post('/api/addOpt', ensureAuthenticated, (req, res) => {
  console.log(req.body.id + ' ' + req.body.opt);
  mongodb.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const polls = db.collection('polls');
    polls.updateOne({
      _id: ObjectID(req.body.id),
    }, {
      $push: {
        options: {
          opt: req.body.opt,
          selections: 0,
        },
      },
    }, (err, result) => {
      if (err)
        throw err;
      console.log('WORKED!');
      db.close();
    });
  });
});

app.post('/api/vote', (req, res) => {
  mongodb.connect(mongoUrl, (err, db) => {
    console.log('Connected!');
    console.log(req.body.id);
    if (err) throw err;
    const polls = db.collection('polls');
    polls.findOne({
      _id: ObjectID(req.body.id),
    }, (err, result) => {
      console.log(result);
      let newOpts = result.options.map((x) => {
        if (x.opt === req.body.option) {
          console.log(x);
          return {
            opt: x.opt,
            selected: x.selected + 1,
          };
        } else {
          console.log('blorp');
          return x;
        };
      });
      polls.updateOne({
        _id: ObjectID(req.body.id),
      }, {
        $set: { options: newOpts },
      }, (err, result) => {
        if (err) throw err;
        console.log(newOpts);
        console.log('Updated!');
        db.close();
      });
    });
  });
  res.end();
});

// All remaining requests return the React app, so it can handle routing.
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  };

  console.log('FAILED');
  res.status(403).end();
}
