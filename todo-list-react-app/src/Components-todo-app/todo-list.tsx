import React from 'react';
import TaskItem from './task-item'; // Ensure this path is correct
import "admin-lte/dist/css/adminlte.min.css";

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todo List</h2>
      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem
              key={index} // Required for React list rendering
              task={task} // Pass the task object
              index={index} // Pass the task's index
              completeTask={completeTask} // Pass the function to mark as complete
              deleteTask={deleteTask} // Pass the function to delete
            />
          ))
        ) : (
          <li className="list-group-item text-center">
            No tasks available. Add some tasks!
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
