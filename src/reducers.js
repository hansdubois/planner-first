import { ADD_TODO, MARK_DONE } from './constants/actionTypes'
import combineReducers from 'redux';

const todoApp = combineReducers({
  todos
});

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state,
          {
            text : action.text,
            completed : false
          }
        ]
      });
      
    case MARK_DONE:
      return Object.assign({}, state, {
        todos: [
          state.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed : true
              })
            }

            return todo;
          })
        ]
      });    

    default:
      return state;
  }
}

export default todoApp;