import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './style/UnloggedButtons.css';

const UnloggedButtons = () => (
  <Nav navbar pullRight>
    <NavItem eventKey={1} href='/login'>
      <h4 className='navAdjust'>Login</h4>
    </NavItem>
  </Nav>
);

export default UnloggedButtons;
