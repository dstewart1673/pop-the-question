import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//import LoggedButtons from './LoggedButtons';
//import UnloggedButtons from './UnloggedButtons';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <h2>Pop! The Question!</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.props.user ?
            (<Nav pullRight>
              <LinkContainer to='/new'>
                <NavItem eventKey={1}>
                  +
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/user'>
                <NavItem eventKey={2}>
                  Profile
                </NavItem>
              </LinkContainer>
              <NavItem eventKey={3} href='/logout'>
                Logout
              </NavItem>
            </Nav>)
          :
            (<Nav pullRight>
              <NavItem eventKey={1} href='/login'>
                Login
              </NavItem>
            </Nav>)
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
