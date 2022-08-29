import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit/dist/configureStore";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import filmReducer from "./film";

