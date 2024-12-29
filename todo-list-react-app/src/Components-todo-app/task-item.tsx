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
  //TaskItemProps: A TypeScript interface (or type) that specifies the expected props for this component.
  //task: An object representing the task, with properties like title, description, and completed
  //The index of the task in the task list, used to identify it for actions.
  // A callback function to mark the task as completed and to the mak the task as deleted.
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : 'bg-light'}`}>
      {/* If the task is completed (task.completed === true), the background becomes green (bg-success) and text is white (text-white).*/}
      <div className="d-flex flex-column">
        <h5 
          className="mb-2" 
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          // Adds a line-through text decoration if the task is completed, indicating it has been crossed off.
        >
          {task.title}
        </h5>
        <p className="mb-0">{task.description}</p>
      </div>
      <div className="d-flex">
        <button
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'} me-2`}
          // If the task is completed: Button is styled as gray (btn-secondary).Text reads "Completed".If not completed:
          //Button is styled as green (btn-success).Text reads "Mark Complete".
          onClick={() => completeTask(index)} // Calls the completeTask function, passing the task's index to mark it as complete.
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => deleteTask(index)} // Calls the deleteTask function, passing the task's index to remove it from the list.
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
