import { createSlice } from "@reduxjs/toolkit";
const userItemsFromStorage = JSON.parse(localStorage.getItem("persist:root"))
	? JSON.parse(localStorage.getItem("persist:root"))?.userRegister
	: {};
console.log(userItemsFromStorage);
const userDetailsSlice = createSlice({
	name: "user",
	initialState: { user: {} },
	reducers: {
		DetailsStart: (state) => {
			state.loading = true;
		},
		DetailsSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.error = null;
			console.log(state.user);
		},
		DetailsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		userDetailsReset: (state) => {
			return { user: {} };
		},
	},
});

export const {
	DetailsStart,
	DetailsSuccess,
	DetailsFailure,
	userDetailsReset,
} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
