/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable import/order */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { cartReducer } from "./slices/index";

// Define the root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create the persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Persist auth and cart slices
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
