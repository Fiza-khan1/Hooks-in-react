import React, { useState } from 'react';

function TaskList({ tasks, onChangeTask, onDeleteTask, onEditTask }) {
  const [editingTask, setEditingTask] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEditClick = (task) => {
    setEditingTask(task);
    setNewText(task.text);
  };

  const handleSaveClick = () => {
    if (newText.trim()) {
      onEditTask({ ...editingTask, text: newText });
      setEditingTask(null);
      setNewText('');
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
          />
          {editingTask && editingTask.id === task.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
