import React from 'react';

const Navbar = props => {
  return (
    <div>
      <h3 className='bg-danger text-white'>
        <i className={props.icon} />
        {props.title}
      </h3>
    </div>
  );
};

export default Navbar;
