
import React from 'react';

interface TodoListProps {
  tasks: { title: string; description: string; completed: boolean }[];
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, completeTask, deleteTask }) => {
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
        {tasks.map((task: Task, index: number) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available. Add some tasks!</p>
      )}
    </div>
  );
};

export default TodoList;

