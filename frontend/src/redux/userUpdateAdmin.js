import { createSlice } from "@reduxjs/toolkit";

const userUpdateAdminSlice = createSlice({
	name: "user",
	initialState: { user: {} },
	reducers: {
		UpdateStartAdmin: (state) => {
			return { loading: true };
		},
		UpdateSuccessAdmin: (state) => {
			return { loading: false, success: true };
		},
		UpdateFailureAdmin: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		userUpdateProfileResetAdmin: (state) => {
			return {
				user: {},
			};
		},
	},
});

export const {
	UpdateStartAdmin,
	UpdateSuccessAdmin,
	UpdateFailureAdmin,
	userUpdateProfileResetAdmin,
} = userUpdateAdminSlice.actions;
export default userUpdateAdminSlice.reducer;
