import React, { Component } from 'react';

class NewOpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionText: '',
    };
  }

  handleOptChange = (evt) => {
    console.log('BLEEP');
    this.setState({ optionText: evt.target.value });
  };

  handleSubmit = (evt) => {
    console.log('FLOOB');
    evt.preventDefault();
    this.props.handleClick(this.state.optionText);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='option' name='option' type='text' onChange={this.handleOptChange}/>
          <button type='button' onClick={this.handleSubmit}>Add Option</button>
        </form>
      </div>
    );
  }
}

export default NewOpt;
