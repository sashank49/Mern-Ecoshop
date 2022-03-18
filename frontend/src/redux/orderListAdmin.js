import { createSlice } from "@reduxjs/toolkit";

const orderListAdminReducer = createSlice({
	name: "orderListAdmin",
	initialState: {
		orders: [],
	},
	reducers: {
		orderListAdminRequest: (state) => {
			return {
				loading: true,
			};
		},
		orderListAdminSuccess: (state, action) => {
			console.log(action.payload);
			return {
				loading: false,
				orders: action.payload,
			};
		},
		orderListAdminFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
	},
});

export const {
	orderListAdminRequest,
	orderListAdminSuccess,
	orderListAdminFailure,
} = orderListAdminReducer.actions;
export default orderListAdminReducer.reducer;
