import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import './Header.css';

const LoggedButtons = () => (
  <Nav pullRight>
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
  </Nav>

  // <div className='container'>
  //   <Link to='/new'><button class='newPoll'>+</button></Link>
  //   <Link to='/user'><button class='profile'>Profile</button></Link>
  //   <a href='/logout'><button class='logout'>Logout</button></a>
  // </div>
);

export default LoggedButtons;
