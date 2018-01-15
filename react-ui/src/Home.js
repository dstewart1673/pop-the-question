import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Home = () => (
  <Jumbotron>
    <h1>Hello!</h1>
    <p>Welcome to Pop! the Question! a simple little polling app made by
      <a href='dstewart1673.github.io'>Daniel Stewart</a>.
    </p>
    <p>
      <Button bsStyle='primary'>To the polls!</Button>
    </p>
  </Jumbotron>
);

export default Home;
