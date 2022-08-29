import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import filmReducer from './film';
import peopleReducer from './people';

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
  films: filmReducer,
  people: peopleReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;
