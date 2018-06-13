import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  const { persons, showPersons } = props;
  let btnStyles = [styles.Button];

  if (showPersons) {
    btnStyles.push(styles.Red);
  }

  const classes = [];
  if (persons.length <= 2) {
    classes.push(styles.Red);
  }
  if (persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnStyles.join(' ')} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default cockpit;
