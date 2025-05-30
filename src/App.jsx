import { useState, useEffect } from 'react'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'

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
      <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-6'>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">📝 To-Do List</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
      </div>
    </div>
  );
}

export default App
