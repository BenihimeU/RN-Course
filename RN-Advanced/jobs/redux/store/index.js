import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';
import { AsyncStorage } from 'react-native';
const store = createStore(
  reducers, // First param is Reducers
  {}, // Initial state of application
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);
persistStore(store, { storage: AsyncStorage, whitelist: ['likes'] });

// use persistStore.perge() to clear state completely
export default store;