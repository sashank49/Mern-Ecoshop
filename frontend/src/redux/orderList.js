import { createSlice } from "@reduxjs/toolkit";

const orderListMyReducer = createSlice({
	name: "orderListMy",
	initialState: {
		orders: [],
	},
	reducers: {
		orderListMyRequest: (state) => {
			return {
				loading: true,
			};
		},
		orderListMySuccess: (state, action) => {
			return {
				loading: false,
				orders: action.payload,
			};
		},
		orderListMyFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
		orderListMyReset: (state) => {
			return { orders: [] };
		},
	},
});

export const {
	orderListMyRequest,
	orderListMySuccess,
	orderListMyFailure,
	orderListMyReset,
} = orderListMyReducer.actions;
export default orderListMyReducer.reducer;
