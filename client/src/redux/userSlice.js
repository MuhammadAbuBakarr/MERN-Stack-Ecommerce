import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	isLoggedIn: false,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		loginUser: (state, { payload }) => {
			state.name = payload;
			state.isLoggedIn = true;
		},
		logoutUser: (state) => {
			state.name = "";
			state.isLoggedIn = false;
		},
		emptyState2: (state) => initialState,
	},
});

export const { loginUser, logoutUser, emptyState2 } = usersSlice.actions;
export default usersSlice.reducer;
