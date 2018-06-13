import React from 'react';

import Person from './Person';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    console.log('[PersonList.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[PersonList.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[PersonList.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE PersonList.js] Inside componentWillReceiveProps',
      nextProps,
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE PersonList.js] Inside shouldComponentUpdate',
      nextProps,
      nextState,
    );
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      'UPDATE [PersonList.js] Inside componentWillUpdate',
      nextProps,
      nextState,
    );
  }

  componentDidUpdate() {
    console.log('UPDATE [PersonList.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[PersonList.js] Inside render()');
    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        ref={this.lastPersonRef}
        click={() => this.props.clicked(index)}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default PersonList;
