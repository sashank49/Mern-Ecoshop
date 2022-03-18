import { createSlice } from "@reduxjs/toolkit";

const productCreateReducer = createSlice({
	name: "productCreate",
	initialState: {},
	reducers: {
		ProductCreateRequest: (state) => {
			state.loading = true;
		},
		ProductCreateSuccess: (state, action) => {
			return { loading: false, success: true, product: action.payload };
		},
		ProductCreateFailure: (state, action) => {
			return { loading: false, error: action.payload };
		},
		ProductCreateReset: (state) => {
			return {};
		},
	},
});

export const {
	ProductCreateRequest,
	ProductCreateSuccess,
	ProductCreateFailure,
	ProductCreateReset,
} = productCreateReducer.actions;
export default productCreateReducer.reducer;
