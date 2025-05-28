import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/tasks');
      const data = await res.json();
      setTasks(data);
    } catch(err) {
      console.error('Failed to fetch tasks:', err);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 To-Do List</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
    </div>
  );
}

export default App;


