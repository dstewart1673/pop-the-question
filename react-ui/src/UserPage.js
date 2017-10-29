import React, { Component } from 'react';

//This won't work properly until /api/addPoll is fixed to add new poll data to user's db entry
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'User',
      polls: '',
    };
  }

  componentDidMount() {
    fetch('/api/user', { credentials: 'include' }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Login First!');
    }).then((json) => {
      this.setState({
        username: json.name,
        polls: json.polls,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.username}</h1>
        <h2>Here are your polls:</h2>
        <div>
          {this.state.polls.map((poll) => (
            <h1>{poll.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default UserPage;
