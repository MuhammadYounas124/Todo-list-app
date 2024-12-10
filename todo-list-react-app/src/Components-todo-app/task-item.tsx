import { useState } from 'react';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleCompleteTask(index)}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
