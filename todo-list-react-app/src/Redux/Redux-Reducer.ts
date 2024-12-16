// redux/reducers.ts
import { LOGIN, LOGOUT, REGISTER, ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './Redux-action';

type Task = {
  title: string;
  description: string;
  completed: boolean;
};

type State = {
  user: any;
  tasks: Task[];
};

const initialState: State = {
  user: null,
  tasks: [],
};

const rootReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case REGISTER:
      return { ...state, user: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((_, i) => i !== action.payload) };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;

