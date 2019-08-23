import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-danger text-white'>
          <i className={this.props.icon} />
          {this.props.title}
        </h3>
      </div>
    );
  }
}

export default Navbar;
