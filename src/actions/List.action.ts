import { IItem, ADD_ITEM_LIST, DELETE_ITEM_LIST, ListAction } from './types/List.type.action'

export const addItem = (newItem: IItem): ListAction => {
  return {
    type: ADD_ITEM_LIST,
    payload: {
      ...newItem
    }
  }
}

export const deleteItem = (timestamp: number): ListAction => {
  return {
    type: DELETE_ITEM_LIST,
    meta: {
      timestamp
    }
  }
}