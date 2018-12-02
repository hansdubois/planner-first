import { createStore } from 'redux'
import todoApp from './reducers'
import {addTodo, markTodoDone} from './actions/todo';

const store = createStore(todoApp);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(markTodoDone(0));
store.dispatch(markTodoDone(0));
​
// Stop listening to state updates
unsubscribe()
