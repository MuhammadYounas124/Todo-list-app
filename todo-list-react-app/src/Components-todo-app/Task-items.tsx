import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../redux/actions';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item border p-3 mb-3">
      <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h5>
      <p>{task.description}</p>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => dispatch(completeTask(index))}
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {task.completed ? 'Completed' : 'Mark as Complete'}
        </button>
        <button
          onClick={() => dispatch(deleteTask(index))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
