import React, { useState } from 'react';
import TaskForm from './Components-todo-app/Task-form';
import TodoList from './Components-todo-app/Todo-list';

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
