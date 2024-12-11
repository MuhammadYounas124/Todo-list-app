
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import TaskForm from "./Components-todo-app/Task-form";
import TodoList from "./Components-todo-app/todo-list";
import Login from './Components-todo-app/login';
import Registration from './Components-todo-app/Registeration-form';
import "admin-lte/dist/css/adminlte.min.css";

// Define the Task interface
interface Task {
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: 'Sample Task 1', description: 'Description 1', completed: false },
    { title: 'Sample Task 2', description: 'Description 2', completed: false },
  ]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  
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

        {/* Navigation Links */}
        { !isLoggedIn && (
          <nav>
            <Link to="/login" className="btn btn-primary me-2">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </nav>
        )}

        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {/* Route for Registration */}
          <Route path="/register" element={<Registration />} />
          {/* Route for Todo (after login) */}
          <Route
            path="/todo"
            element={
              isLoggedIn ? (
                <>
                  <TaskForm setTasks={setTasks} />
                  <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
                </>
              ) : (
                <div>Please login to access the tasks.</div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
