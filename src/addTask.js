import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './Action';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ description: taskDescription, isDone: false }));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTask;
