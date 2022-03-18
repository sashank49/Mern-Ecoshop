import { createSlice } from "@reduxjs/toolkit";

const productListReducer = createSlice({
	name: "productList",
	initialState: {
		products: [],
		loading: false,
		error: false,
	},
	reducers: {
		ProductListRequest: (state) => {
			state.loading = true;
		},
		ProductListSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = false;
		},
		ProductListFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { ProductListRequest, ProductListSuccess, ProductListFailure } =
	productListReducer.actions;
export default productListReducer.reducer;
