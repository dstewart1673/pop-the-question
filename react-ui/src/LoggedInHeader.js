import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class LoggedInHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }

  render() {
    return (
      <Row>
        <Col xs={3}>
          <h3>POP The Question!</h3>
        </Col>
        <Col xs={3} xsOffset={9} md={2} mdOffset={10}>
          <Link to='/new'><button class='newPoll'>+</button></Link>
          <Link to='/user'><button class='profile'>Profile</button></Link>
          <a href='/logout'><button class='logout'>Logout</button></a>
        </Col>
      </Row>
    );
  }
}

export default LoggedInHeader;
