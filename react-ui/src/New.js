import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: [{ opt: '', selected: 0, }],
      pollCreated: '',
    };
  }

  handleTitleChange = (evt) => {
    this.setState({ title: evt.target.value });
  };

  handleOptChange = (i) => (evt) => {
    const newOpt = this.state.options.map((opt, ind) => {
      if (i !== ind) return opt;
      return { opt: evt.target.value, selected: 0 };
    });
    this.setState({ options: newOpt });
  };

  handleAddOpt = () => {
    this.setState({ options: this.state.options.concat([{ opt: '', selected: 0 }]) });
  };

  handleRemoveOpt = (i) => () => {
    this.setState({ options: this.state.options.filter((val, ind) => (i !== ind)) });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      title: this.state.title,
      options: this.state.options,
    };

    fetch('/api/addpoll', {
      method: 'POST',
      body: data,
    }).then((response) => {
      if (response.ok) {
        return response.json;
      };

      throw new Error(`status ${response.status}`);
    }).then((json) => {
      console.log(json);
      this.setState({ pollCreated: json.id });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' type='text' onChange={this.handleTitleChange}/>
          {this.state.options.map((option, i) => (
            <div>
              <input type='text' placeholder='New Option' value={option.opt}
                onChange={this.handleOptChange(i)} />
              <button type='button' onClick={this.handleRemoveOpt(i)}>Remove Option</button>
            </div>
          ))}
          <button type='button' onClick={this.handleAddOpt}>Add Option</button>
          <button>Submit!</button>
        </form>
        {(this.state.pollCreated === '' ? <h1>click to submit</h1> : <Link to={ '/api/poll/' + this.state.pollCreated })}
      </div>
    );
  }
}

export default NewPoll;
