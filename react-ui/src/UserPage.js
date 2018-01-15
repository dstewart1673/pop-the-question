import React, { Component } from 'react';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    this.update();
  }

  update = () => {
    fetch('/api/user', { credentials: 'include' }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Login First!');
    }).then((json) => {
      this.setState({
        username: json.name,
        polls: json.polls,
      });
    });
  };

  delete = (poll) => () => {
    const data = { pollID: poll };
    fetch('/api/removePoll', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    }).then((response) => {
      if (response.ok) {
        console.log('BEEP!');
      };
    });
    this.update();
  };

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              <h1>Hello {this.state.username}!</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              <h2>Here are your polls:</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <Grid fluid={true}>
                <Row>
                  <Col xs={12} className='poll-block'>
                    <Link to={ '/poll/' + poll._id }><h1>{poll.title}</h1></Link>
                    <button onClick={this.delete(poll._id)}>DELETE</button>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserPage;
