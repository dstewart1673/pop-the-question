import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const UnloggedButtons = () => (
  <Nav navbar pullRight>
    <NavItem eventKey={1} href='/login'>
      Login
    </NavItem>
  </Nav>
);

export default UnloggedButtons;
