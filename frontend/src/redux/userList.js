import { createSlice } from "@reduxjs/toolkit";

const userListMyReducer = createSlice({
	name: "userListMy",
	initialState: {
		users: [],
	},
	reducers: {
		userListMyRequest: (state) => {
			return {
				loading: true,
			};
		},
		userListMySuccess: (state, action) => {
			return {
				loading: false,
				users: action.payload,
			};
		},
		userListMyFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
		userListMyReset: (state) => {
			return { users: [] };
		},
	},
});

export const {
	userListMyRequest,
	userListMySuccess,
	userListMyFailure,
	userListMyReset,
} = userListMyReducer.actions;
export default userListMyReducer.reducer;
