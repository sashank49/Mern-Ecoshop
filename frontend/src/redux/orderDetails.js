import { createSlice } from "@reduxjs/toolkit";

const orderDetailsReducer = createSlice({
	name: "orderDetails",
	initialState: {
		loading: true,
		orderItems: [],
		shippingAddress: {},
		itemsPrice: 0,
	},
	reducers: {
		orderDetailsRequest: (state) => {
			return {
				...state,
				loading: true,
			};
		},
		orderDetailsSuccess: (state, action) => {
			return {
				loading: false,
				order: action.payload,
			};
		},
		orderDetailsFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
	},
});

export const { orderDetailsRequest, orderDetailsSuccess, orderDetailsFailure } =
	orderDetailsReducer.actions;
export default orderDetailsReducer.reducer;
