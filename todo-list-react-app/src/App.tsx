
import React, { useState } from "react";
import Taskform from "./Components-todo-app/Task-form";
import TodoList from "./Components-todo-app/todo-list";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components-todo-app/login';
import Registration from './Components-todo-app/Registeration-form';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { title: 'Sample Task 1', description: 'Description 1', completed: false },
    { title: 'Sample Task 2', description: 'Description 2', completed: false },
  ]);

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

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
                <Taskform />
                <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
