import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers/reducer';
import * as thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.thunk)
//   composeWithDevTools(applyMiddleware(thunk))
);

export default store;