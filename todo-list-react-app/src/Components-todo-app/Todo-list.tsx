import { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  //const tasks = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState('');
  //const dispatch = useDispatch();

  const handleAddTask = () => {
    //dispatch({ type: 'ADD_TASK', payload: { text: newTask, completed: false } });
    setNewTask('');
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
        {/* {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task.text} <button>Complete</button> <button>Delete</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default TodoList;
