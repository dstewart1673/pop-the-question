import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import './style/LoggedButtons.css';

const LoggedButtons = () => (
  <Nav navbar pullRight className='navAdjust'>
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
);

export default LoggedButtons;
