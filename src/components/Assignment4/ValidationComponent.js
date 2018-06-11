import React from 'react';

const ValidationComponent = props => {
  const style = {
    color: props.length <= 5 ? 'red' : 'black'
  };

  return (
    <div style={style}>
      {props.length <= 5 ? 'Text too short!' : 'Text long enough'}
    </div>
  );
};

export default ValidationComponent;
