import React, { Component } from 'react';
import './App.css';

import Feed from './components/Feed'
import Input from './components/Input'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Input/>
        <Feed/>
      </div>
    );
  }
}

export default App;
