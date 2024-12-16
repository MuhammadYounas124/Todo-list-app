import React from 'react';
import "admin-lte/dist/css/adminlte.min.css";

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  index: number;
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, completeTask, deleteTask }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : 'bg-light'}`}>
      <div className="d-flex flex-column">
        <h5 
          className="mb-2" 
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
        </h5>
        <p className="mb-0">{task.description}</p>
      </div>
      <div className="d-flex">
        <button
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'} me-2`}
          onClick={() => completeTask(index)}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
