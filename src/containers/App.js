import React, { PureComponent } from 'react';

import styles from './App.css';
import PersonList from '../components/Persons/PersonList';
import Cockpit from '../components/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // This check is automatically performed by PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState,
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      'UPDATE [App.js] Inside componentWillUpdate',
      nextProps,
      nextState,
    );
  }

  componentDidUpdate() {
    console.log('UPDATE [App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'someOtherValue',
    showPersons: false,
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
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    const { showPersons, persons } = this.state;

    console.log('[App.js] Inside render()');

    return (
      <div className={styles.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show People
        </button>
        <Cockpit
          title={this.props.title}
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
