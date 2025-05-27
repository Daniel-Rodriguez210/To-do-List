import React, { useState } from "react";

function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return; // avoid empty submissions

        try {
            const res = await fetch('http://localhost:3001/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({ title }),
            });

            if (res.ok) {
                setTitle('');
                onTaskAdded();
            }
        } catch (err) {
            console.error('Failed to add task:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;