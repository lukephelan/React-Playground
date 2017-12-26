import React from 'react';
import logo from './logo.svg';
import './App.css';

class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Luke'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  
  render() {
    return (
      <p className="App-intro">
        Hello, {this.state.username}! <br /><br />
        Change name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </p>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My World</h1>
        </header>
        <HelloUser />
      </div>
    );
  }
}

export default App;
