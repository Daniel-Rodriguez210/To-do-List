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
        <>
            {tasks.length === 0 ? (
                <p className='text-center text-gray-500 italic mt-4'>
                    No tasks yet. Add one above!
                </p>
            ) : (


                <ul>
                    {tasks.map((task) => (
                        <li key={task._id} className='flex flex-col sm:flex-row sm:items-center justify-between p-2 border-b border-gray-200'>
                            <span
                                className='text-gray-700 cursor-pointer hover:line-through transition mb-2 sm:mb-0'
                                onClick={() => toggleTask(task._id)}
                            >
                                {task.title}
                            </span>
                            <button onClick={() => deleteTask(task._id)} className='self-end sm:self-auto text-red-500 hover:text-red-700 transition'>
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default TaskList;