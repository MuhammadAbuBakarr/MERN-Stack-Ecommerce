import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	cart: [],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProducts: (state, { payload }) => {
			state.items = payload;
		},
		addCart: (state, { payload }) => {
			state.cart.push({ ...payload });
		},
		removeCart: (state, { payload }) => {
			const removeItem = state.cart.filter((item) => item.id !== payload);
			state.cart = removeItem;
		},
		increaseQty: (state, { payload }) => {
			const item = state.cart.find((item) => item.id === payload);
			item.quantity++;
		},
		decreaseQty: (state, { payload }) => {
			const item = state.cart.find((item) => item.id === payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		emptyState: (state, { payload }) => {
			state.items = payload;
		},
	},
});

export const {
	addProducts,
	addCart,
	removeCart,
	increaseQty,
	decreaseQty,
	emptyState,
} = productSlice.actions;
export default productSlice.reducer;
