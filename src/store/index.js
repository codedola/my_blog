import { createStore, applyMiddleware, combineReducers } from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import authReducer from './auth/reducer';
import categoriesReducer from './categories/reducer';
import menusReducer from './menus/reducer';
import tagsReducer from "./tags/reducer"
import appReducer from './app/reducer';

import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
  App: appReducer,
  Users: usersReducer,
  Posts: postsReducer,
  Comments: commentsReducer,
  Auth: authReducer,
  Categories: categoriesReducer,
  Menus: menusReducer,
  Tag: tagsReducer,
})

const arrayMiddlewares = [reduxThunk];

// if (process.env.NODE_ENV === 'development') {
  arrayMiddlewares.push(logger);
// }

const middleWares = applyMiddleware(...arrayMiddlewares)

const store = createStore(rootReducer, middleWares);

export default store;