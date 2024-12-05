import React from 'react';

// Define the Task type
interface Task {
  text: string;
  completed: boolean;
}

// Props for TaskItem component
interface TaskProps {
  task: Task;
  index: number;
}

const TaskItem: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <li className="list-group-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {index + 1}. {task.text}
      </span>
      <button className="btn btn-sm btn-success ms-2">Mark Complete</button>
      <button className="btn btn-sm btn-danger ms-2">Delete</button>
    </li>
  );
};

export default TaskItem;
