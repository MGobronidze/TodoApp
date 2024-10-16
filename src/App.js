import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);  // State to store the to-do items
  const [task, setTask] = useState('');    // State to track the input field

  // Function to add a new task to the list
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { task, isCompleted: false }]);
      setTask('');  // Clear input field after adding
    }
  };

  // Function to toggle the completion status of a task
  const toggleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Function to delete a task
  const deleteTask = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(index)}>{todo.task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
