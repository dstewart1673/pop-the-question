import React, { Component } from 'react';
import NewOpt from './NewOpt';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      creator: '',
      options: ['loading!'],
      addOpt: false,
    };
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
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
  };

  vote = (opt) => () => {
    const data = {
      id: this.props.match.params.id,
      option: opt,
    };
    console.log(opt);
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
        this.update();
      };
    });
  };

  addOption = () => {
    this.setState({addOpt: true,});
  };

  handleAddOpt = (option) => () => {
    const data = {
      id: this.props.match.params.id,
      option: option,
    };
    fetch('/api/addOpt', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    }).then((response) => {
      if (response.ok) {
        this.update();
      };
    });
  };

  //TODO: Add "add option" functionality somewhere
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>A poll by {this.state.creator}.</h2>
        <div>
          {(this.state.options === []) ?
            <h1>LOADING!</h1>
            : this.state.options.map((option) => (
              <div>
                <h1>{ option.opt }</h1>
                <button onClick={this.vote(option.opt)}>VOTE!</button>
              </div>
            ))
          }
        </div>
        <div>
          {this.state.addOpt ?
            <button onClick={this.addOption}>Add Option</button>
            : <NewOpt handleClick={this.handleAddOpt} />
          }
        </div>
      </div>
    );
  }
}

export default Poll;
