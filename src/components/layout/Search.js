import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className='form-inline my-2 my-lg-0'
          action=''
        >
          <input
            type='search'
            placeholder='Search Users'
            className='form-control mr-sm-2'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type='submit' className='btn btn-outline-light my-2 my-sm-0'>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
