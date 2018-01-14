import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './style/UnloggedButtons.css';

const UnloggedButtons = () => (
  <Nav navbar pullRight>
    <NavItem eventKey={1} href='/login' bsClass='navAdjust'>
      Login
    </NavItem>
  </Nav>
);

export default UnloggedButtons;
