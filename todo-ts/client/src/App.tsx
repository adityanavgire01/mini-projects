import React, { useState, useEffect } from "react";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    // Fetch tasks from the back-end server
    const fetchTasks = async () => {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        setTasks(data);
    };

    // Add a new task to the back-end server
    const addTask = async () => {
        if (newTask.trim()) {
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ task: newTask }),
            });
            setNewTask("");
            fetchTasks(); // Refresh the list of tasks
        }
    };

    // Fetch tasks when the component is mounted
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
