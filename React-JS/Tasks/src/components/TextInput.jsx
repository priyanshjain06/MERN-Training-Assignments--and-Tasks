import React, { useState } from 'react';

const TextInput = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <div>
      <label>Input Text: </label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default TextInput;
