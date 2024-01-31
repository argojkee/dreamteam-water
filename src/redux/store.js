import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import authSliceReducer from './auth/authSlice';
import waterReducer from './water/waterSlice';

const authPersistConfig = {
  // 'key' is identification of one or more storage
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// basic reducer
const persistedReducer = persistReducer(
  authPersistConfig,
  authSliceReducer,
  );

//...or more reducers
const rootReducer = combineReducers({
  auth: persistedReducer,
  water: waterReducer,
});

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
