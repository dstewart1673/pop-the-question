import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import LoggedButtons from './LoggedButtons';
import UnloggedButtons from './UnloggedButtons';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.user);
    return (
      <Row>
        <Col xs={3} md={2} class='container'>
          <h3>POP The Question!</h3>
        </Col>
        <Col xs={3} xsOffset={5} md={2} mdOffset={7}>
          {(this.props.user ? <LoggedButtons /> : <UnloggedButtons />)}
        </Col>
      </Row>
    );
  }
}

export default Header;
