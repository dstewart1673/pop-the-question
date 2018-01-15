import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

UnloggedButtons => (
  <Nav navbar pullRight className='navAdjust'>
    <NavItem eventKey={1} href='/login'>
      Login
    </NavItem>
  </Nav>
);

export default UnloggedButtons;
