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
        <div className="bg-white rounded-lg shadow p-6 max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="p-2 border rounded mb-3 m-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;