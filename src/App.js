import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/Output';
import UserInput from './User/Input';

class App extends Component {
  state = {
    name: 'User1'
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <UserInput change={this.handleChangeName} value={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
