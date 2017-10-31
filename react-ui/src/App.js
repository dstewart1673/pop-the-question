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
import LoggedInHeader from './LoggedInHeader';
import UnloggedHeader from './UnloggedHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch('/api/user', { credentials: 'include' }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return { name: null };
      }
    }).then((json) => {
      this.setState({
        user: json.name,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {(this.state.user) ? <LoggedInHeader user={this.state.user} /> : <UnloggedHeader />}
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/polls' component={Polls} />
          <Route path='/user' component={UserPage} />
          <Route path='/poll/:id' component={Poll} />
          <Route path='/new' component={NewPoll} />
        </Switch>

      </div>
    );
  }
}

export default App;
