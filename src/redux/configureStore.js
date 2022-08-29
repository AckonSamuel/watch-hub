import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit/dist/configureStore";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import filmReducer from "./film";

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
    films: filmReducer,
});

const store = configureStore({
    reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;