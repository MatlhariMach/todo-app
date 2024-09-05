import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control mr-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn btn-pink" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <div className="ml-auto">
            <button
              className="btn btn-link text-pink mr-2"
              onClick={() => setIsEditing(true)}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="btn btn-link text-pink"
              onClick={() => onDelete(todo.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
