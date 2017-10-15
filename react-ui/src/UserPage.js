import React from 'react';

//This won't work properly until /api/addPoll is fixed to add new poll data to user's db entry
/*class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'User',
      polls: ''
    };
  };
  componentDidMount() {
    fetch('/api/user')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json;
      })
      .then((response) => {
        console.log(response);
        this.setState({
          username: response.name,
          polls: response.polls || null,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h2>Here are your polls:</h2>
        <div><h1>TEST!</h1></div>
      </div>
    );
  }
}

/*{this.state.polls.map((poll, index) => {
  return (
    <div>
      <p>Hi!</p>
    </div>
  )
})}
*/

const UserPage = () => {
  /*fetch('/api/user')
    .then(response => {
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      return response.json;
    })
    .then((json) => {
      console.log(json);
      return (
        <div><h1>Hello, {json.name}!</h1></div>
      );
    });*/
    return (
      <div>
        <h1>Hi there!</h1>
      </div>
    )
}

export default UserPage;
