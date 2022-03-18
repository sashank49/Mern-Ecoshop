import { createSlice } from "@reduxjs/toolkit";

const productDetailsReducer = createSlice({
	name: "productDetails",
	initialState: {
		product: { reviews: [] },
		loading: false,
		error: false,
	},
	reducers: {
		ProductDetailsRequest: (state) => {
			state.loading = true;
		},
		ProductDetailsSuccess: (state, action) => {
			state.loading = false;
			state.product = action.payload;
			state.error = false;
		},
		ProductDetailsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	ProductDetailsRequest,
	ProductDetailsSuccess,
	ProductDetailsFailure,
} = productDetailsReducer.actions;
export default productDetailsReducer.reducer;
