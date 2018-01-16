import React from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
  <Grid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
        <Jumbotron>
          <h1>Hello!</h1>
          <p>Welcome to Pop! the Question! a simple little polling app made by
            <a href='dstewart1673.github.io'> Daniel Stewart</a>.
          </p>
          <p>
            <LinkContainer to='/polls'>
              <Button bsStyle='primary'>To the polls!</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default Home;
