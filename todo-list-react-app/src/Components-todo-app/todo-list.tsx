import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/Redux-action";
// deleteTask and toggleTask are imported to handle task deletion and toggling completion status.
import "admin-lte/dist/css/adminlte.min.css";

const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks); // useSelector: Retrieves the tasks state from the Redux store.
  const dispatch = useDispatch(); // useDispatch: Dispatches actions to the Redux store.

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Todo List</h2>
      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task: any, index: number) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "bg-light" : ""
              }`}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none", 
                  //  Displayed as text with a line-through decoration if the task is marked completed:

                }}
                className="flex-grow-1"
              >
                {task.title}
              </span>
              <div>
                <button
                  onClick={() => dispatch(toggleTask(index))}
                  className={`btn btn-sm ${
                    task.completed ? "btn-warning" : "btn-success"
                  } me-2`} // Toggles task status (completed/active) by dispatching toggleTask with the task index.
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => dispatch(deleteTask(index))}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
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


