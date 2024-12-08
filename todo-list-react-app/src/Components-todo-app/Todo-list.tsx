import React from 'react';
import TaskItem from './Task-items'; // Correct the import path if needed

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
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={index}  // Ensure you use 'key' for each item in a list
            task={task}
            index={index}  // Pass 'index' correctly here
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available. Add some tasks!</p>
      )}
    </div>
  );
};

export default TodoList;

