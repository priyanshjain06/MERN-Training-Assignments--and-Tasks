import React from 'react';

const TodoList = ({ todos }) => {
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    backgroundColor: '#F4F6F7',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <ul style={listStyle}>
      {todos.map((todo, index) => (
        <li key={index} style={listItemStyle}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;