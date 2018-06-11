import React from 'react';
import styles from './Cockpit.css';

const cockpit = props => {
  const { persons, showPersons } = props;
  let btnStyles = '';

  if (showPersons) {
    btnStyles = styles.Red;
  }

  const classes = [];
  if (persons.length <= 2) {
    classes.push(styles.red);
  }
  if (persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnStyles} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;