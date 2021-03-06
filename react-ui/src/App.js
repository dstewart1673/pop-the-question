import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import Home from './Home';
import Polls from './Polls';
import UserPage from './UserPage';
import Poll from './Poll';
import NewPoll from './New';
import Header from './Header';
import Disclaimer from './Disclaimer';
import './App.css';

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
        <Header user={this.state.user} />
        <Switch className='content'>
          <Route exact path='/' component={Home} />
          <Route path='/polls' component={Polls} />
          <Route path='/user' component={UserPage} />
          <Route path='/poll/:id' component={Poll} />
          <Route path='/new' component={NewPoll} />
          <Route path='/disclaimer' component={Disclaimer} />
        </Switch>
      </div>
    );
  }
}

export default App;
