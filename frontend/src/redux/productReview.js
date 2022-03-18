import { createSlice } from "@reduxjs/toolkit";

const productReviewCreateReducer = createSlice({
	name: "productReviewCreate",
	initialState: {},
	reducers: {
		ProductReviewCreateRequest: (state) => {
			return { loading: true };
		},
		ProductReviewCreateSuccess: (state, action) => {
			return { loading: false, success: true };
		},
		ProductReviewCreateFailure: (state, action) => {
			return { loading: false, error: action.payload };
		},
		ProductReviewCreateReset: (state) => {
			return {};
		},
	},
});

export const {
	ProductReviewCreateRequest,
	ProductReviewCreateSuccess,
	ProductReviewCreateFailure,
	ProductReviewCreateReset,
} = productReviewCreateReducer.actions;
export default productReviewCreateReducer.reducer;
