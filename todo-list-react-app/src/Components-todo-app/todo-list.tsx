// Components-todo-app/todo-list.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/Redux-action";

const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todo List</h2>
      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task: any, index: number) => (
            <li key={index} className="list-group-item">
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <button onClick={() => dispatch(toggleTask(index))}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => dispatch(deleteTask(index))}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">
            No tasks available. Add some tasks!
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
