import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users: [
      {
        login: 'mojombo',
        id: 1,
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        login: 'tmcw',
        id: 32314,
        avatar_url: 'https://avatars2.githubusercontent.com/u/32314?v=4',
        html_url: 'https://github.com/tmcw'
      },
      {
        login: 'tommcfarlin',
        id: 132166,
        avatar_url: 'https://avatars0.githubusercontent.com/u/132166?v=4',
        html_url: 'https://github.com/tommcfarlin'
      },
      {
        login: 'tomdale',
        id: 90888,
        avatar_url: 'https://avatars2.githubusercontent.com/u/90888?v=4',
        html_url: 'https://github.com/tomdale'
      },
      {
        login: 'tommy351',
        id: 411425,
        avatar_url: 'https://avatars0.githubusercontent.com/u/411425?v=4',
        html_url: 'https://github.com/tommy351'
      },
      {
        login: 'tomnomnom',
        id: 58276,
        avatar_url: 'https://avatars1.githubusercontent.com/u/58276?v=4',
        html_url: 'https://github.com/tomnomnom'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
