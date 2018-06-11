import React, { Component } from 'react';

import styles from './App.css';
import Person from '../components/Persons/Person';
import PersonList from '../components/Persons/PersonList';
import Cockpit from '../components/Cockpit';

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

    return (
      <div className={styles.App}>
        <Cockpit
          persons={persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {showPersons && (
          <div>
            <PersonList
              persons={persons}
              clicked={this.handleDeletePerson}
              changed={this.handleChangeName}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
