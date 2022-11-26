import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "",
	name: "",
	isLoggedIn: false,
	role: "",
	orders: [],
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		loginUser: (state, { payload }) => {
			state.name = payload.name;
			state.id = payload.id;
			state.role = payload.role;
			state.isLoggedIn = true;
		},
		logoutUser: (state) => {
			state.name = "";
			state.isLoggedIn = false;
			state.id = "";
			state.role = "";
			state.orders = [];
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
