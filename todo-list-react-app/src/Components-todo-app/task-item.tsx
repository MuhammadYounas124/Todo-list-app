import React from 'react';

// Define Task type
interface Task {
  title: string;
  description: string;
  completed: boolean;
}

// Define TaskItemProps interface
interface TaskItemProps {
  task: Task;
  index: number;
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

// Functional component for TaskItem
const TaskItem: React.FC<TaskItemProps> = ({ task, index, completeTask, deleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </h5>
        <p>{task.description}</p>
      </div>
      <div>
        <button
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'} me-2`}
          onClick={() => completeTask(index)}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
