export const ADD_USER = 'ADD_USER';

export interface IUser {
  email?: string;
  password?: string;
}

interface AddUserAction {
  type: typeof ADD_USER,
  payload: IUser
}

export interface IUsersState {
  users: IUser[]
}

export type UserAction = AddUserAction;