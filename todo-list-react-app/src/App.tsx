import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components-todo-app/login';
import Registration from './Components-todo-app/Registeration-form';
import TaskForm from './Components-todo-app/Task-form';
import TodoList from './Components-todo-app/todo-list';
import "admin-lte/dist/css/adminlte.min.css";


interface Task {
  title: string;
  description: string;
  completed: boolean;
  file?: File | null;
}


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: 'Sample Task 1', description: 'Description 1', completed: false },
    { title: 'Sample Task 2', description: 'Description 2', completed: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (task: { title: string; description: string }) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const sortTasks = (type: 'title' | 'completed') => {
    const sortedTasks = [...tasks];
    if (type === 'title') {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === 'completed') {
      sortedTasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    }
    setTasks(sortedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="container mt-4">
        <h1>Task Manager</h1>
        <nav>
          <Link to="/login" className="btn btn-primary me-2">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/todo"
            element={
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control mb-2"
                  />
                  <button onClick={() => sortTasks('title')} className="btn btn-info me-2">
                    Sort by Title
                  </button>
                  <button onClick={() => sortTasks('completed')} className="btn btn-warning">
                    Sort by Completed
                  </button>
                </div>
                <TaskForm addTask={addTask} />
                <TodoList tasks={filteredTasks} completeTask={completeTask} deleteTask={deleteTask} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

