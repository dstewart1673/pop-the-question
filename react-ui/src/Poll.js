import React, { Component } from 'react';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      creator: '',
      options: ['loading!'],
    };
    this.vote = this.bind.vote(this);
  }

  componentDidMount() {
    fetch('/api/poll/' + this.props.match.params.id)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        };

        return response.json();
      })
      .then(json => {
        this.setState({
          title: json.title,
          creator: json.creator,
          options: json.options,
        });
      });
  }

  componentDidUpdate() {
    //TODO: add refresh of poll data here
  }

  vote( opt ) {
    const data = {
      id: this.props.match.params.id,
      option: opt,
    };
    fetch('/api/vote', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    }).then((response) => {
      if (response.ok) {
        return response.json();
      };
  })};

  //TODO: Add "add option" functionality somewhere
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>A poll by {this.state.creator}.</h2>
        <div>
          {
            (this.state.options === []) ?
            <h1>LOADING!</h1>
            : this.state.options.map((option) => (
            <div>
              <span>{ option.opt }</span>
              <button onClick={this.vote(option.opt)}></button>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

export default Poll;
