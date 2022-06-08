import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import todoReducer from './slices/todoSlice';
import thunk from 'redux-thunk';


export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>  [...getDefaultMiddleware(), thunk]
});