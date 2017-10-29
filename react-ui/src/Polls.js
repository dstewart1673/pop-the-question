import React, { Component } from 'react';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: ['LOADING!'],
    };
  }

  componentDidMount() {
    fetch('/api/polls')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }

        return response.json();
      })
      .then(json => {
        this.setState({
          polls: json,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.polls.map((poll, index) => (
            <div>
              <h1>{ poll.title + ' created by ' + poll.creator }</h1>
            </div>
        ))}
      </div>
    );
  }
}

export default Polls;
