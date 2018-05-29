import React from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class Assignment extends React.Component {
  state = {
    text: ''
  };

  handleInputChange = event => {
    this.setState({ text: event.target.value });
  };

  handleRemoveChar = charIndex => {
    const chars = [...this.state.text];
    chars.splice(charIndex, 1);
    this.setState({
      text: chars.join('')
    });
  };

  render() {
    const style = {
      marginTop: '20px',
      textAlign: 'center'
    };

    const { text } = this.state;

    const charList =
      text.length <= 5
        ? null
        : text
            .split('')
            .map((char, index) => (
              <CharComponent
                char={char}
                remove={() => this.handleRemoveChar(index)}
              />
            ));

    return (
      <div style={style}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.text}
        />
        <p>{this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length} />
        {charList}
      </div>
    );
  }
}

export default Assignment;
