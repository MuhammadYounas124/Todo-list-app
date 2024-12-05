import { useDispatch } from 'react-redux';

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  index: number;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index }) => {
  const dispatch = useDispatch();

  const markComplete = () => {
    dispatch({ type: 'TOGGLE_TASK_COMPLETION', payload: index });
  };

  const deleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  return (
    <div className="task-item border p-3 mb-3">
      <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h5>
      <p>{task.description}</p>
      <div className="d-flex justify-content-between">
        <button
          onClick={markComplete}
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {task.completed ? 'Completed' : 'Mark as Complete'}
        </button>
        <button
          onClick={deleteTask}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
