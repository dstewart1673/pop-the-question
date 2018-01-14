import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
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
          //{ this.props.user ? <LoggedButtons /> : <UnloggedButtons /> }
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

      // <Row class='container'>
      //   <Col xs={3} md={3} className='container'>
      //     <h3>POP The Question!</h3>
      //   </Col>
      //   <Col xs={3} xsOffset={5} md={2} mdOffset={7}>
      //     {(this.props.user ? <LoggedButtons /> : <UnloggedButtons />)}
      //   </Col>
      // </Row>
    );
  }
}

export default Header;
