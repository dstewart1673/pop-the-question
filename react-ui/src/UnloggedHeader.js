import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class UnloggedHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col xs={3} xsOffset={9} md={1} mdOffset={11}>
          <a href='/login'><button class='login'>Log In</button></a>
        </Col>
      </div>
    );
  }
}

export default UnloggedHeader;
