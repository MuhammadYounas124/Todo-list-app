import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./Components-todo-app/Task-form";
import TodoList from "./Components-todo-app/todo-list";
import Login from "./Components-todo-app/login";
import Registration from "./Components-todo-app/Registeration-form";  // Check the component name
import { logout } from "./Redux/Redux-action";
import "bootstrap/dist/css/bootstrap.min.css";  // Ensure Bootstrap CSS is loaded
import "admin-lte/dist/css/adminlte.min.css"; // If you still want to use AdminLTE
import { SetStateAction } from "react";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Task Manager</h1>
        <div className="d-flex justify-content-center mb-3">  {/* Centered buttons */}
          {!user ? (
            <div className="text-center mb-4 container mt-4 d-flex justify-content-center">
              <Link to="/login" className="btn btn-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          )}
        </div>

        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } } />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/todo"
            element={
              user ? (
                <div>
                  <TaskForm />
                  <TodoList />
                </div>
              ) : (
                <div className="alert alert-warning">Please log in to view your tasks.</div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
