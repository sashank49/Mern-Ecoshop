import { createSlice } from "@reduxjs/toolkit";

const orderDeliverReducer = createSlice({
	name: "orderDeliver",
	initialState: {},
	reducers: {
		orderDeliverRequest: (state) => {
			return {
				loading: true,
			};
		},
		orderDeliverSuccess: (state) => {
			return {
				loading: false,
				success: true,
			};
		},
		orderDeliverFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
		orderDeliverReset: (state) => {
			return {};
		},
	},
});

export const {
	orderDeliverRequest,
	orderDeliverSuccess,
	orderDeliverFailure,
	orderDeliverReset,
} = orderDeliverReducer.actions;
export default orderDeliverReducer.reducer;
