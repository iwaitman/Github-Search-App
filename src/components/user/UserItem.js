import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    };
  }
  render() {
    let styles = {
      width: '18rem',
      textAlign: 'center'
    };
    return (
      <div className='card' style={styles}>
        <img src={this.state.avatar_url} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>{this.state.login}</h5>
          <a href={this.state.html_url} className='btn btn-danger'>
            View Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
