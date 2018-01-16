import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const UnloggedButtons = () => (
  <Nav navbar pullRight>
    <LinkContainer to='/disclaimer'>
      <NavItem eventKey={1}>
        Disclaimer
      </NavItem>
    </LinkContainer>
    <NavItem eventKey={2} href='/login'>
      Login
    </NavItem>
  </Nav>
);

export default UnloggedButtons;
