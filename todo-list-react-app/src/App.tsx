import React from 'react';
import { Provider } from 'react-redux';

import Taskform from './Components-todo-app/Task-form';
import TodoList from './Components-todo-app/Todo-list';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1>Task Manager</h1>
        <Taskform />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;