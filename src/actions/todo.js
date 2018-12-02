import * as types from '../constants/actionTypes';

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}
​
export function markTodoDone(index) {
  return { type: types.MARK_DONE, index }
}
