import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './Action';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask({ id: task.id, description: editedDescription }));
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
