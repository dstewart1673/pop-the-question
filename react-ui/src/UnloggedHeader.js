import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class UnloggedHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={3} md={2}>
          <h3>POP The Question!</h3>
        </Col>
        <Col xs={3} xsOffset={5} md={1} mdOffset={9}>
          <a href='/login'><button class='login'>Log In</button></a>
        </Col>
      </Row>
    );
  }
}

export default UnloggedHeader;
