import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import usersReducer from "./userSlice";
import storage from "reduxjs-toolkit-persist/lib/storage";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "reduxjs-toolkit-persist";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	products: productsReducer,
	users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});
