import React from 'react';

const Option = props => (
  <div className='option'>
    <span>
      <p className='option__text'>
        {props.count}. {props.value}
      </p>
    </span>
    <button
      className='button button--link '
      onClick={() => props.handleDeleteOption(props.value)}
    >
      Remove
    </button>
  </div>
);

export default Option;
