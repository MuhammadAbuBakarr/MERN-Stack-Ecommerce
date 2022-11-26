import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (thunkAPI) => {
		const { status, data } = await axios.get("/product");
		if (status === 201) {
			return data;
		}
	}
);

const initialState = {
	items: [],
	cart: [],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
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
		emptyCart: (state, { payload }) => {
			state.cart = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			state.items = payload;
		});
	},
});

export const {
	addProducts,
	addCart,
	removeCart,
	increaseQty,
	decreaseQty,
	emptyState,
	emptyCart,
} = productSlice.actions;
export default productSlice.reducer;
