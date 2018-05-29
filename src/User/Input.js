import React from 'react';

const input = props => {
  return <input type="text" onChange={props.change} value={props.value} />;
};

export default input;
