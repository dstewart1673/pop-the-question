import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UnloggedHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href='/login'><button class='login'>Log In</button></a>
      </div>
    );
  }
}

export default UnloggedHeader;
