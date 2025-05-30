import React from 'react';

function TaskList({ tasks, fetchTasks }) {
    // Toggle completed status
    const toggleTask = async (id) => {
        try {
            await fetch(`http://localhost:3001/api/tasks/${id}/toggle`, {
                method: 'PUT',
            });
            fetchTasks(); // Refresh the list after toggle
        } catch (err) {
            console.error('Error toggling task:', err);
        }
    };

    // Delete a task
    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:3001/api/tasks/${id}`, {
                method: 'DELETE',
            });
            fetchTasks(); // Refresh the list after deletion
        } catch (err) {
            console.error('Error deleting task:', err);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-sm mx-auto m-6 hover:shadow-lg">
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => toggleTask(task._id)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => deleteTask(task._id)} style={{ marginLeft: '10px' }}>
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;