import { createSlice } from "@reduxjs/toolkit";

const orderPayReducer = createSlice({
	name: "orderPay",
	initialState: {},
	reducers: {
		orderPayRequest: (state) => {
			return {
				loading: true,
			};
		},
		orderPaySuccess: (state, action) => {
			return {
				loading: false,
				success: true,
			};
		},
		orderPayFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
		orderPayReset: (state) => {
			return {};
		},
	},
});

export const { orderPayRequest, orderPaySuccess, orderPayFailure,orderPayReset } =
	orderPayReducer.actions;
export default orderPayReducer.reducer;
