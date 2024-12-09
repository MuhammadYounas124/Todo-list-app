import React from "react";

import Taskform from "./Components-todo-app/Task-form";
import TodoList from "./Components-todo-app/Todo-list";

const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Task Manager</h1>
      <Taskform />
      <TodoList />
    </div>
  );
};

export default App;
