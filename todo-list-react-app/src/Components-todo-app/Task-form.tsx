import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Redux-action";
import "admin-lte/dist/css/adminlte.min.css";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addTask({ title, description, completed: false }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form p-3 border rounded shadow-sm">
      <div className="form-group mb-3">
        <label htmlFor="title" className="form-label">Task Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="form-control"
          required
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
