import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Polls from './Polls';
import UserPage from './UserPage';
import Poll from './Poll';
import NewPoll from './New';

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
      <div className="App">
        <div className="App-header">
          <h2><a href='/login'>login</a></h2>
          <h2><Link to='/user'>USER</Link></h2>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/polls' component={Polls} />
          <Route path='/user' component={UserPage} />
          <Route path='/poll/:id' component={Poll} />
          <Route path='/new' component={NewPoll} />
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
    );
  }
}

export default App;
