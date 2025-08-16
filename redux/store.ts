import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

<<<<<<< HEAD
/**
 * Create the Redux store with thunk middleware and Redux DevTools
 * integration. The exported store can be used directly in client
 * code or accessed via the wrapper for server side rendering.
 */
=======

>>>>>>> 94694ae (refactored styling and cleaned up code)
const initialState = {};
const middleware = [thunk];

export const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

<<<<<<< HEAD
=======
// Infer the state type from the store itself
>>>>>>> 94694ae (refactored styling and cleaned up code)
export type RootState = ReturnType<typeof store.getState>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);