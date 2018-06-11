import React from 'react';
import './User.css';

const output = props => {
  return (
    <div className="output">
      <p>{props.name}</p>
      <p>Whatever</p>
    </div>
  );
};

export default output;
