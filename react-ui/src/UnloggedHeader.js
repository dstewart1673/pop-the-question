import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class UnloggedHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={3} xsOffset={9}>
              <a href='/login'><button class='login'>Log In</button></a>
            </Col>
          </Row>
        <Grid>
      </div>
    );
  }
}

export default UnloggedHeader;
