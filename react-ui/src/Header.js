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
    return (
      <Row class='container'>
        <Col xs={3} md={2} className='container'>
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
