import { createSlice } from "@reduxjs/toolkit";

const productDeleteReducer = createSlice({
	name: "productDelete",
	initialState: {},
	reducers: {
		ProductDeleteRequest: (state) => {
			state.loading = true;
		},
		ProductDeleteSuccess: (state, action) => {
			return { loading: false, success: true };
		},
		ProductDeleteFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	ProductDeleteRequest,
	ProductDeleteSuccess,
	ProductDeleteFailure,
} = productDeleteReducer.actions;
export default productDeleteReducer.reducer;
