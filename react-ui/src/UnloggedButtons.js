import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const UnloggedButtons = () => (
  <Nav pullRight>
    <NavItem eventKey={1} href='/login'>
      Login
    </NavItem>
  </Nav>

  // <div>
  //   <a href='/login'><button class='login'>Log In</button></a>
  // </div>
);

export default UnloggedButtons;
