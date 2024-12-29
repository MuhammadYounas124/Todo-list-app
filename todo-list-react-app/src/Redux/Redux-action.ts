// redux/actions.ts
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER'; // LOGIN, LOGOUT, REGISTER: For user authentication.
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'; // ADD_TASK, DELETE_TASK, TOGGLE_TASK: For managing tasks.

export const login = (user: any) => ({
  type: LOGIN,  // type: The action type.
  payload: user,     // payload (optional): Data sent with the action.
});

export const logout = () => ({ 
  type: LOGOUT,
});

export const register = (user: any) => ({ // Purpose: Represents registering a new user.
  type: REGISTER,  //  Identifies this action.
  payload: user,  // Contains the user data (user) required for registration.
   //user can include information such as a username, email, password, etc.
});

export const addTask = (task: any) => ({ // Adds a new task to the task list.
  type: ADD_TASK, // Identifies this action.
  payload: task, // Contains the task object to be added.
});

export const deleteTask = (index: number) => ({
  type: DELETE_TASK, // Identifies this action.
  payload: index, // The index (number) of the task to be deleted from the task list.
});

export const toggleTask = (index: number) => ({ //  toggle means switching between two states or conditions.
  type: TOGGLE_TASK, // Identifies this action.
  payload: index, // The index (number) of the task to toggle.
});
