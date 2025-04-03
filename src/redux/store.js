// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from "./slice/authSlice";
import getCourseReducer from './slice/getCourseSlice'

// Persist Config
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token", "isAuthenticated"], // Persist only necessary fields
};

// Combine Reducers
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  getCourse: getCourseReducer
});

// Configure Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor
export const persistor = persistStore(store);
export default store;
