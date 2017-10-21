import React, { Component } from 'react';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: [{ opt: '', selected: 0 }]
    }
  }

  handleTitleChange = (event) => {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  handleOptChange = (i) => (event) => {
    const newOpt = this.state.options.map((opt, ind) => {
      if (i !== ind) return opt;
      return { opt: event.target.value, selected: 0 };
    });
    this.setState({ options: newOpt });
  }

  handleAddOpt = () => {
    this.setState({ options: this.state.options.concat([{ opt: '', selected: 0 }])});
  }

  handleRemoveOpt = (i) => () => {
    this.setState({ options: this.state.options.filter(( val, ind ) => ( i !== ind ))});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;

    fetch('/api/newpoll', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' type='text' onChange={this.handleTitleChange()}/>
        {this.state.options.map(( option, i ) => {
          <div>
            <input type='text' placeholder='New Option' value={option.opt} onChange={this.handleOptChange(i)} />
            <button type='button' onClick={this.handleRemoveOpt(i)}>Remove Option</button>
          </div>
        })}
        <button type='button' onClick={this.handleAddOpt}>Add Option</button>
        <button>Submit!</button>
      </form>
    );
  }
}

export default NewPoll;
