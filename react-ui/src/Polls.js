import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
            <Col xs={12} md={8} mdOffset={2}>
              {this.state.polls.map((poll, index) => (
                  <div>
                    <h1>{ poll.title + ' created by ' + poll.creator }</h1>
                  </div>
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Polls;
