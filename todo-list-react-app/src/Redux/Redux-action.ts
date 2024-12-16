// redux/actions.ts
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const login = (user: any) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = (user: any) => ({
  type: REGISTER,
  payload: user,
});

export const addTask = (task: any) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index: number) => ({
  type: DELETE_TASK,
  payload: index,
});

export const toggleTask = (index: number) => ({
  type: TOGGLE_TASK,
  payload: index,
});
