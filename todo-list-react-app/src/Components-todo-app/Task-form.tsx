import React, { useState } from "react"; // useState is used to manage form input states (title and description).
import { useDispatch } from "react-redux"; // useDispatch allows the component to dispatch actions to the Redux store.
import { addTask } from "../Redux/Redux-action"; // addTask is the Redux action for adding a task
import "admin-lte/dist/css/adminlte.min.css";

const TaskForm: React.FC = () => { // This is a functional React component (React.FC) named TaskForm.
  const [title, setTitle] = useState(""); // It allows users to add a task with a title and description using a form.
  const [description, setDescription] = useState(""); // Initially set to an empty string ("")
  const dispatch = useDispatch(); // Tasks are dispatched to the Redux store using an addTask action.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) { // title: State variable for the task title.
      // Checks if both title and description are non-empty (using trim()).
      dispatch(addTask({ title, description, completed: false })); // completed: false (default value indicating incomplete task).
      setTitle(""); // Updated using setTitle when input changes.
      setDescription(""); // Updated using setDescription when textarea changes.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form p-3 border rounded shadow-sm">
      <div className="form-group mb-3">
        <label htmlFor="title" className="form-label">Task Title</label>
        <input
          id="title"
          type="text"
          value={title} // State binding: value={title}.
          onChange={(e) => setTitle(e.target.value)} //  Updates state with onChange={(e) => setTitle(e.target.value)}.
          placeholder="Enter task title"
          className="form-control"
          required // required to enforce input validation.
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">Task Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Task</button>
    </form>
  );
};

export default TaskForm;
