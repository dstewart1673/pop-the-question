import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedInHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }

  render() {
    return (
      <div>
        <Link to='/new'><button class='newPoll'>+</button></Link>
        <Link to='/user'><button class='profile'>Profile</button></Link>
        <a href='/logout'><button class='logout'>Logout</button></a>
      </div>
    );
  }
}

export default LoggedInHeader;
