import React from 'react';
import WithClass from '../../../hoc/WithClass';
import withClass from '../../../hoc/withClassHoc';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';
import styles from './Person.css';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth && <p>I'm authenticated</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, styles.Person);
