import { ADD_ITEM_LIST, DELETE_ITEM_LIST, IListState, ListAction } from '../actions/types/List.type.action';


const initialState: IListState = {
  list: []
};

export const listReduce = (state = initialState, action: ListAction ) => {
  switch (action.type) {
    case ADD_ITEM_LIST:
      return {
        ...state, 
        list: [...state.list, action.payload]
      };

    case DELETE_ITEM_LIST:
      return {
        ...state,
        list: state.list.filter(
          listItem => listItem.timestamp !== action.meta.timestamp
        )
      }

    default:
      return state;
  }
}