import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import LoggedButtons from './LoggedButtons';
import UnloggedButtons from './UnloggedButtons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
    console.log(this.props.user);
  }

  render() {
    return (
      <Row>
        <Col xs={3} md={2}>
          <h3>POP The Question!</h3>
        </Col>
        <Col xs={3} xsOffset={5} md={2} mdOffset={7}>
          {(this.state.user ? <LoggedButtons /> : <UnloggedButtons />)}
        </Col>
      </Row>
    );
  }
}

export default Header;
