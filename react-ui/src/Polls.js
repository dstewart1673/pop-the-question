import React, { Component } from 'react';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    };
  }
  componentDidMount() {
    fetch('/api/polls')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json;
      })
      .then(json => {
        this.setState({
          polls: json
        });
      });
  }
  render() {
    return (
      <div>
        {this.props.polls.map((poll, index) => {
          return (
            <div>
              <p>{poll.title}</p>
              <p>{poll.desc}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Polls;
