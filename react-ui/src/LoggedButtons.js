import React from 'react';
import { Link } from 'react-router-dom';

const LoggedButtons = () => (
  <div className='container'>
    <Link to='/new'><button class='newPoll'>+</button></Link>
    <Link to='/user'><button class='profile'>Profile</button></Link>
    <a href='/logout'><button class='logout'>Logout</button></a>
  </div>
);

export default LoggedButtons;
