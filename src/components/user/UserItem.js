import React from 'react';

const UserItem = props => {
  let styles = {
    width: '18rem',
    textAlign: 'center'
  };
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className='card' style={styles}>
      <img src={avatar_url} className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>{login}</h5>
        <a href={html_url} className='btn btn-danger'>
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserItem;
