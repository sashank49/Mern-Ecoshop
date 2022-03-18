import { createSlice } from "@reduxjs/toolkit";

const orderCreateReducer = createSlice({
	name: "orderCreate",
	initialState: {},
	reducers: {
		orderCreateRequest: (state) => {
			return {
				loading: true,
			};
		},
		orderCreateSuccess: (state, action) => {
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		},
		orderCreateFailure: (state, action) => {
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		},
		orderCreateReset: (state) => {
			return {};
		},
	},
});

export const {
	orderCreateRequest,
	orderCreateSuccess,
	orderCreateFailure,
	orderCreateReset,
} = orderCreateReducer.actions;
export default orderCreateReducer.reducer;
