import React, { Component } from 'react';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      creator: '',
      options: ['loading!'],
    };
  }

  componentDidMount() {
    fetch('/api/poll/' + this.props.match.params.id)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        };

        console.log(response.json);
        return response.json;
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
            : this.state.options.map((option) => (<p>{ option }</p>))
        }
        </div>
      </div>
    );
  }
}

export default Poll;
