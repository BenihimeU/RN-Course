import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
  reducers, // First param is Reducers
  {}, // Initial state of application
  compose(
    applyMiddleware(thunk) // middleware for network calls
  )
);

export default store;