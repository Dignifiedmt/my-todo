import React, { useState } from 'react';
import Header from './Header';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="container">
      <Header />
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
        className="input-field"
        required
      /> &nbsp; &nbsp;
      <button className="add-btn" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span style={{ marginRight: 10 }}>{task}</span>
            <button
              className="remove-btn"
              onClick={() => handleRemoveTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
