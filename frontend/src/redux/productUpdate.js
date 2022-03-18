import { createSlice } from "@reduxjs/toolkit";

const productUpdateReducer = createSlice({
	name: "productUpdate",
	initialState: {
		product: {},
	},
	reducers: {
		ProductUpdateRequest: (state) => {
			return { loading: true };
		},
		ProductUpdateSuccess: (state, action) => {
			return { loading: false, success: true, product: action.payload };
		},
		ProductUpdateFailure: (state, action) => {
			return { loading: false, error: action.payload };
		},
		ProductUpdateReset: (state) => {
			return { product: {} };
		},
	},
});

export const {
	ProductUpdateRequest,
	ProductUpdateSuccess,
	ProductUpdateFailure,
	ProductUpdateReset,
} = productUpdateReducer.actions;
export default productUpdateReducer.reducer;
