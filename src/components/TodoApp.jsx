import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask } from '../features/todoSlice';
import { TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TodoApp = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({
        id: Date.now(),
        text: task,
        completed: false,
        dueDate: dueDate,
      }));
      setTask('');
      setDueDate(null);
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          label="New Task"
          variant="outlined"
          className="mb-4"
        />
        

        <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DatePicker
          label="Due Date"
          value={dueDate}
          onChange={(newValue) => setDueDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth className="mb-4" />}
          />
          </LocalizationProvider>

        <Button
          onClick={handleAddTask}
          variant="contained"
          color="primary"
          className="mb-4"
        >
          Add Task
        </Button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center space-x-2 ${task.completed ? 'line-through' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span>{task.text}</span>
            {task.dueDate && (
              <span className="text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            )}
            <Button
              onClick={() => handleRemoveTask(task.id)}
              variant="outlined"
              color="secondary"
              className="ml-2"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;