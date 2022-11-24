import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "",
	name: "",
	isLoggedIn: false,
	orders: [],
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		loginUser: (state, { payload }) => {
			state.name = payload.name;
			state.id = payload.id;
			state.isLoggedIn = true;
		},
		logoutUser: (state) => {
			state.name = "";
			state.isLoggedIn = false;
			state.id = "";
		},
		userProducts: (state, { payload }) => {
			state.orders = payload;
		},
		emptyState2: (state) => initialState,
	},
});

export const { loginUser, logoutUser, emptyState2, userProducts } =
	usersSlice.actions;
export default usersSlice.reducer;
