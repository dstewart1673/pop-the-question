import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import { Link } from 'react-router-dom';
import './UserPage.css';

//This won't work properly until /api/addPoll is fixed to add new poll data to user's db entry
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'User',
      polls: [],
    };
  }

  componentDidMount() {
    fetch('/api/user', { credentials: 'include' }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Login First!');
    }).then((json) => {
      console.log(json.polls);
      this.setState({
        username: json.name,
        polls: json.polls,
      });
    });
  }

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              <h1>Hello, {this.state.username}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              <h2>Here are your polls:</h2>
            </Col>
          </Row>
          {this.state.polls.map((poll) => (
            <Row>
              <Col xs={9} md={8} mdOffset={3} className='poll-block'>
                <Link to={ '/poll/' + poll._id }><h1>{poll.title}</h1></Link>
              </Col>
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default UserPage;
