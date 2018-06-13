import React, { PureComponent } from 'react';

import styles from './App.css';
import PersonList from '../components/Persons/PersonList';
import Cockpit from '../components/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClassHoc';

export const AuthContext = React.createContext(false);

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

  getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Inside getDerivedStateFromProps',
      nextProps,
      prevState,
    );
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
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
    toggleClicked: 0,
    showPersons: false,
    authenticated: false,
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
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClicked: prevState.toggleClicked + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    const { showPersons, persons } = this.state;

    console.log('[App.js] Inside render()');

    return (
      <Aux classes={styles.App}>
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
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {showPersons && (
            <div>
              <PersonList
                persons={persons}
                clicked={this.handleDeletePerson}
                changed={this.handleChangeName}
              />
            </div>
          )}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
