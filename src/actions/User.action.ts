import { ADD_USER, UserAction } from './types/User.type.action'
import { IUser } from '../actions/types/User.type.action'

export function addUser(newUser: IUser): UserAction {
  return {
    type: ADD_USER,
    payload: newUser
  }
}