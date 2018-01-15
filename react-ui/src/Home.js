import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Row>
      <Col xs={12} md={10}>
        <Jumbotron>
          <h1>Hello!</h1>
          <p>Welcome to Pop! the Question! a simple little polling app made by
            <a href='dstewart1673.github.io'>Daniel Stewart</a>.
          </p>
          <p>
            <Button bsStyle='primary'>To the polls!</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default Home;
