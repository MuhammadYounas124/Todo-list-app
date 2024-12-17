import React from 'react';
import "admin-lte/dist/css/adminlte.min.css";

interface Task {
  title: string; // title (string): The task title.
  description: string; // description (string): The task description.
  completed: boolean; // completed (boolean): Whether the task is completed.
}

interface TaskItemProps {
  task: Task; // task (Task): The task object containing title, description, and status.
  index: number; // index (number): Position/index of the task in the task list.
  completeTask: (index: number) => void; // completeTask (function): A callback to mark the task as complete.
  deleteTask: (index: number) => void; // deleteTask (function): A callback to delete the task.
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
