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
        {tasks.length > 0 ? ( // If the tasks array has items, it maps over them to render each task.
          tasks.map((task: any, index: number) => ( // Iterates over the tasks array using map():
          // task: Represents the current task object.index: The current index of the task in the array.
            <li
              key={index} // Unique identifier for each list item.
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "bg-light" : ""
              }`} // If the task is marked as completed (task.completed === true), adds a light background (bg-light).
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none", 
             // Dynamically applies line-through text decoration if the task is completed.Otherwise, no decoration is applied.
                }}
                className="flex-grow-1"
              >
                {task.title}
              </span>
              <div>
                <button
                  onClick={() => dispatch(toggleTask(index))}
                  //  Dispatches the toggleTask action with the task's index to toggle its completion status.
                  className={`btn btn-sm ${
                    task.completed ? "btn-warning" : "btn-success"
   // If completed (task.completed === true): Button is styled as yellow (btn-warning), and label shows "Undo".
   //If active: Button is styled as green (btn-success), and label shows "Complete".
                  } me-2`} // Toggles task status (completed/active) by dispatching toggleTask with the task index.
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => dispatch(deleteTask(index))}
                  //  Dispatches the deleteTask action with the task's index to remove it from the list.
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center" // Otherwise, displays a fallback message: "No tasks available. Add some tasks!"
          >
            No tasks available. Add some tasks!
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;


