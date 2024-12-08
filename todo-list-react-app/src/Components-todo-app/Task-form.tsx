
import React, { useState } from 'react';

interface TaskformProps {
  addTask: (task: { title: string; description: string; completed: boolean }) => void;
}

const Taskform: React.FC<TaskformProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default Taskform;
