// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./Components-todo-app/Task-form";
import TodoList from "./Components-todo-app/todo-list";
import Login from "./Components-todo-app/login";
import Registration from "./Components-todo-app/Registeration-form";
import { logout } from "./Redux/Redux-action";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div>
        <h1>Task Manager</h1>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={() => {}} />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/todo"
            element={
              user ? (
                <>
                  <TaskForm />
                  <TodoList />
                </>
              ) : (
                <div>Please log in</div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
