import React from 'react';

const Validation = (props) => {
  if (props.length >= 6) {
    return (
      <div>
        <p>The Text Entered Is Long Enough To Pass Validation</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>The Text Entered Is Not Long Enough To Pass Validation</p>
      </div>
    )
  }
};

export default Validation;