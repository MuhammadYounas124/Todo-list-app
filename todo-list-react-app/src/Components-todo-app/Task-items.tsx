import React from 'react';

interface TaskItemProps {
  task: { title: string; description: string; completed: boolean };
  index: number;
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, completeTask, deleteTask }) => {
  return (
    <div className="task-item border p-3 mb-3">
      <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h5>
      <p>{task.description}</p>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => completeTask(index)}
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {task.completed ? 'Completed' : 'Mark as Complete'}
        </button>
        <button onClick={() => deleteTask(index)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

