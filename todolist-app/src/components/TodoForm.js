import React, { useState, useEffect } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue(''); // Clear the input field after submission
        }
    };

    return (
        <div className="todo-container">
            <div className="date-time">
                <p className="date-time-text">Date: {currentDateTime.date}</p>
                <p className="date-time-text">Time: {currentDateTime.time}</p>
            </div>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="todo-input"
                    placeholder="What is the task today?"
                />
                <button type="submit" className="todo-btn">Add Task</button>
            </form>
        </div>
    );
};
