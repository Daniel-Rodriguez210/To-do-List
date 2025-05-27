import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://localhost:3001/api/tasks')
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .then((err) => console.err('Failed to fetch tasks:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 To-Do List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;


