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

class HelloOtherUser extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: ''
    }
    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }

  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    });
  }

  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend} />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tyler Durden',
      friends: [
        'Jack Johnson',
        'Jimmy Barnes',
        'Randy Rhoads'
      ]
    }
    this.addFriend = this.addFriend.bind(this)
  }

  addFriend(friend) {
    if (friend) {
      this.setState({
        friends: this.state.friends.concat([friend])
      })
    }
  }

  // Invoked once before first render
  componentWillMount() {
    // Calling setState here does not cause a re-render
    // alert('In component Will Mount');
  }

  // Invoked once after the first render
  componentDidMount() {
    // You now have access to this.getDOMNode()
    // alert('In Component Did Mount');
    // This is the lifecycle event in which you would
    // make AJAX requests
  }

  // Invoked whenever there is a prop change
  // Called BEFORE render
  componentWillReceiveProps(nextProps) {
    // Not called for the initial render
    // Previous props can be accessed by this.props
    // Calling setState here does not trigger an additional re-render
    // alert('In Component Will Receive Props');
  }

  // Called IMMEDIATELY before a component is unmounted
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    var listItems = this.props.names.map(function (friend) {
      return <li key={friend}> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul className="App-list">
          {listItems}
        </ul>
      </div>
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
        <HelloOtherUser name="Tyler" />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
