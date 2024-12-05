import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './Task-items'; // Ensure the correct path

// Define the Task type
interface Task {
  text: string;
  completed: boolean;
}

// Define the structure of the Redux state
interface RootState {
  tasks: Task[];
}

const TodoList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks); // Correctly typed state
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch({ type: 'ADD_TASK', payload: { text: newTask, completed: false } });
    setNewTask('');
  };

  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task: Task, index: number) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

