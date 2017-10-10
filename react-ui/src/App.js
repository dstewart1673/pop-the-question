import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Polls from './Polls';
import UserPage from './UserPage';
import Poll from './Poll';
import New from './New';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  /*componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }*/

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2><a href='/login'>login</a></h2>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/polls' component={Polls} />
            <Route path='/user' component={UserPage} />
            <Route path='/poll/:id' component={Poll} />
            <Route path='/new' component={New} />
          </Switch>
          <p className="App-intro">
            {'This is '}
            <a href="https://github.com/mars/heroku-cra-node">
              {'create-react-app with a custom Node/Express server'}
            </a><br/>
          </p>
          <p className="App-intro">
            Hello!
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
