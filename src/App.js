import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyEditor from './MyEditor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="text-center App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <MyEditor />
        </div>
      </div>
    );
  }
}

export default App;
