import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSliceReducer from './auth/authSlice'


const rootReducer = combineReducers(
  {
      auth: authSliceReducer,
     
       //...or more redusers
  }
);

const authPersistConfig = {
  // 'key' is indeficate of one or more storage
  key: 'auth',
  storage,
  whitelist: ['token'],
};


// basic reducer
const persistedReducer = persistReducer(authPersistConfig, rootReducer)

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: 
  persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);