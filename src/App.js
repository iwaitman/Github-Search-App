import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github px-2' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
