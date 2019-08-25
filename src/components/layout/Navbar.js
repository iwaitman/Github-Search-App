import React from 'react';
import Search from './Search';

const Navbar = props => {
  return (
    <nav className='navbar bg-danger mb-4'>
      <a className='navbar-brand text-white' href='/'>
        <i className={props.icon} />
        {props.title}
      </a>
      <Search searchUsers={props.searchUsers} setAlert={props.setAlert} />
    </nav>
  );
};

export default Navbar;
