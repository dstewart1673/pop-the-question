import React, { Component } from 'react';

//This won't work properly until /api/addPoll is fixed to add new poll data to user's db entry
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      polls: ''
    };
  };
  componentDidMount() {
    fetch('/api/user')
      /*.then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json;
      })*/
      .then(response => {
        console.log(response);
        this.setState({
          username: response.json.name,
          polls: response.json.polls
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.username}!</h1>
        <h2>Here are your polls:</h2>
        <div>{this.state.polls.map((poll, index) => {
          return (
            <div>
              <p><a href={'/poll/' + poll[0]}>{poll[1]}</a></p>
            </div>
          )
        })}</div>
      </div>
    )
  }
}

export default UserPage;
