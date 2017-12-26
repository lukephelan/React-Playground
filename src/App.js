import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component {
  render() {
    return (
      <p className="App-intro" >
        Hello, World!
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My World</h1>
        </header>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
