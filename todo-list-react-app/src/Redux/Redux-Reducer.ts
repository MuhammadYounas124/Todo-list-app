// redux/reducers.ts
import { LOGIN, LOGOUT, REGISTER, ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './Redux-action';

type Task = {
  title: string;
  description: string;
  completed: boolean;
};

type State = {
  user: any;        // user: Stores logged-in user information.
  tasks: Task[]; //  An array of task objects (title, description, completed).
};

const initialState: State = {
  user: null,     // user is null (no user logged in).
  tasks: [],       // tasks is an empty array.
};

const rootReducer = (state: State = initialState, action: any): State => { 
  // The current state of the application. It defaults to initialState if no state is provided.
  //An object that describes the change to be made. 
  // It has a type property (mandatory) and may have additional data in a payload property.
  switch (action.type) {             // Uses a switch statement to update the state based on the action type.
    case LOGIN: //Logs in a user
      return { ...state, user: action.payload }; // Updates the user field in the state with the data from action.payload.
    case LOGOUT:
      return { ...state, user: null }; // Sets the user field to null.
    case REGISTER:
      return { ...state, user: action.payload }; // Updates the user field with the new user's data from action.payload.
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
      // Appends the new task (from action.payload) to the existing tasks array.
      //  The ...state.tasks ensures the original tasks are preserved (immutability).
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((_, i) => i !== action.payload) };
      //  Removes the task at the index specified in action.payload using the filter method. Immutability is maintained.
    case TOGGLE_TASK:
      return {
        ...state, // Returns a new state while ensuring immutability (using ...state and array methods like map and filter)
        tasks: state.tasks.map((task, i) => i === action.payload ? { ...task, completed: !task.completed } : task
        ), //  Toggles the completion status of a task. Uses map to iterate over the tasks array:
//  If the current task’s index matches action.payload, it toggles the completed status (!task.completed).
        // Otherwise, the task remains unchanged.Maintains immutability by creating a new array.
      };
    default:
      return state;
  }
};

export default rootReducer;

