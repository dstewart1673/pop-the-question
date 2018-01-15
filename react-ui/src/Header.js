import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import LoggedButtons from './LoggedButtons';
import UnloggedButtons from './UnloggedButtons';
import './style/Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/' className='title'>Pop! The Question!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { this.props.user ? <LoggedButtons /> : <UnloggedButtons /> }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
