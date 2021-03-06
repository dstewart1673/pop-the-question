import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Polls.css';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: ['LOADING!'],
    };
  }

  componentDidMount() {
    fetch('/api/polls')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }

        return response.json();
      })
      .then(json => {
        this.setState({
          polls: json,
        });
      });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <p>Check out some of the polls our community has started!</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              {this.state.polls.map((poll, index) => (
                  <div className='poll-list-item'>
                    <h1>{ poll.title + ' created by ' + poll.creator + ' with '
                      + responseCount(poll.options) + ' votes!'}</h1>
                  </div>
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function responseCount(opts) {
  let x = 0;
  for (let i in opts) {
    x += opts[i].selections;
  };

  return x;
}

export default Polls;
