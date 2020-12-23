export const ADD_ITEM_LIST = 'ADD_ITEM_LIST';
export const DELETE_ITEM_LIST = 'DELETE_ITEM_LIST';

export interface IListState {
  list: IItem[]
}

export interface IItem {
  timestamp: number,
  item: string
}

interface AddItemAction {
  type: typeof ADD_ITEM_LIST,
  payload: IItem
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM_LIST,
  meta: {
    timestamp: number
  }
}

export type ListAction = AddItemAction | DeleteItemAction;