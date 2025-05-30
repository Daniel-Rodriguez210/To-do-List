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
        <div className="flex gap-2 mb-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-1 rounded-lg hover:bg-blue-600 transition">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;