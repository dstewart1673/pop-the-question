import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import LoggedButtons from './LoggedButtons';
import UnloggedButtons from './UnloggedButtons';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <h2>Pop! The Question!</h2>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Collapse>
          { this.props.user ? <LoggedButtons /> : <UnloggedButtons /> }
        </Navbar.Collapse>
      </Navbar>

      // <Row class='container'>
      //   <Col xs={3} md={3} className='container'>
      //     <h3>POP The Question!</h3>
      //   </Col>
      //   <Col xs={3} xsOffset={5} md={2} mdOffset={7}>
      //     {(this.props.user ? <LoggedButtons /> : <UnloggedButtons />)}
      //   </Col>
      // </Row>
    );
  }
}

export default Header;
