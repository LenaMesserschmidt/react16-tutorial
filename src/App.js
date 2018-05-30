import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'someOtherValue',
    showPersons: false
  };

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  handleDeletePerson = personIndex => {
    const persons = this.state.persons.slice(); // or const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const { showPersons, persons } = this.state;

    const style = {
      backgroundColor: showPersons ? 'red' : 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    };

    const classes = [];
    if (persons.length <= 2) {
      classes.push('red');
    }
    if (persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {showPersons && (
          <div>
            {persons.map((person, index) => (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.handleDeletePerson(index)}
                change={event => this.handleChangeName(event, person.id)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
