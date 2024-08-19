import React, { useReducer, useState } from 'react';

let nextId = 3;

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: nextId++, text: action.text, done: false }
      ];
    case 'edit':
      return state.map(task =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case 'delete':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}


const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

function MyApp() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const [text, setText] = useState(''); // State for input text
  const [editId, setEditId] = useState(null); // State for tracking which task is being edited


  const handleInput = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text.trim()) {
      dispatch({ type: 'add', text });
      setText(''); 
    }
  };


  const editTask = (id) => {
    setEditId(id);
    const taskToEdit = tasks.find(task => task.id === id);
    setText(taskToEdit.text);
  };


  const saveEdit = () => {
    if (text.trim()) {
      dispatch({ type: 'edit', id: editId, text });
      setEditId(null);
      setText('');
    }
  };


  const deleteTask = (id) => {
    dispatch({ type: 'delete', id });
  };

  return (
    <>
      <div>
        {tasks.map((item) => (
          <p key={item.id}>
            {item.id} {item.text}
            <button onClick={() => editTask(item.id)}>Edit</button>
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </p>
        ))}
      </div>

      <input 
        type="text" 
        value={text} 
        onChange={handleInput} 
        placeholder="Enter new task" 
      />
      {editId !== null ? (
        <button onClick={saveEdit}>Save Edit</button>
      ) : (
        <button onClick={addTask}>Add Task</button>
      )}
    </>
  );
}

export default MyApp;
