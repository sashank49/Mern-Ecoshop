import { createSlice } from "@reduxjs/toolkit";

const userDeleteReducer = createSlice({
	name: "userDelete",
	initialState: {
		users: [],
	},
	reducers: {
		userDeleteRequest: (state) => {
			return {
				loading: true,
			};
		},
		userDeleteSuccess: (state, action) => {
			return {
				loading: false,
				success: true,
			};
		},
		userDeleteFailure: (state, action) => {
			return {
				loading: false,
				error: action.payload,
			};
		},
	},
});

export const { userDeleteRequest, userDeleteSuccess, userDeleteFailure } =
	userDeleteReducer.actions;
export default userDeleteReducer.reducer;
