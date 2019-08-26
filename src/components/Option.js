import React from 'react';

const Option = props => (
  <div>
    <span>
      {props.value}
      {'         '}
    </span>
    <button onClick={() => props.handleDeleteOption(props.value)}>
      Remove
    </button>
  </div>
);

export default Option;
