import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="form-group d-flex align-items-center">
      <input
        type="text"
        className="form-control mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo item"
      />
      <button type="button" className="btn btn-pink" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
