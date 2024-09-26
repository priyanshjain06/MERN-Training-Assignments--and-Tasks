import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
  const handleClick = () => {
    toggleState();
  };

  return <button onClick={handleClick}>Toggle</button>;
};

export default ToggleSwitch;
