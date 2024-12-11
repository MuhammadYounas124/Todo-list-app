import React from 'react';

interface Task {
  file: any;
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
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : ''}`}>
      <div>
        <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </h5>
        <p>{task.description}</p>
        {task.file && <p>Attached: {task.file.name}</p>}
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
