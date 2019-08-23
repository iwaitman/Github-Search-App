import React from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/user/UserItem';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github px-2' />
        <UserItem />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
