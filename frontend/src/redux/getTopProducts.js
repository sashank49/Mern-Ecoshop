import { createSlice } from "@reduxjs/toolkit";

const productTopRatedReducer = createSlice({
	name: "productTopRated",
	initialState: {
		products: [],
	},
	reducers: {
		ProductTopRatedRequest: (state) => {
			return { loading: true, products: [] };
		},
		ProductTopRatedSuccess: (state, action) => {
			return { loading: false, products: action.payload };
		},
		ProductTopRatedFailure: (state, action) => {
			return { loading: false, error: action.payload };
		},
	},
});

export const {
	ProductTopRatedRequest,
	ProductTopRatedSuccess,
	ProductTopRatedFailure,
} = productTopRatedReducer.actions;
export default productTopRatedReducer.reducer;
