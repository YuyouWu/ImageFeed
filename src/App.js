import React, { Component } from 'react';
import './App.css';

import Feed from './components/Feed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Feed/>
      </div>
    );
  }
}

export default App;
