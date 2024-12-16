import { createStore } from 'redux';

const initialState = {
  user: null,
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'REGISTER':
      return { ...state, user: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((_, i) => i !== action.payload) };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
