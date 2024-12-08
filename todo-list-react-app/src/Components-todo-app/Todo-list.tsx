import React from 'react';
import TaskItem from './Task-items'; // Ensure the file name and import match correctly

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
            key={index}
            task={task} // Passing the task object here
            index={index}
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

