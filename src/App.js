import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Van Phan</h3>
        </div>
        <p className="App-intro">
          <Post/>
        </p>
      </div>
    );
  }
}

export default App;
