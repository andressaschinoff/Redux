import { ADD_USER, UserAction, IUsersState } from '../actions/types/User.type.action';

const initialState: IUsersState = {
  users: []
};

export function userReduce(state = initialState, action: UserAction ) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    default:
      return state;
  }
}