import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoggedButtons from './LoggedButtons';
import UnloggedButtons from './UnloggedButtons';
import './style/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid className='navbarWidth'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Pop! The Question!</a>
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
