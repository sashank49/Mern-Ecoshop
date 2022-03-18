import axios from "axios";
import { loginStart } from "./user";
import { loginFailure } from "./user";
import { loginSuccess } from "./user";
import { registerStart } from "./userRegister";
import { registerSuccess } from "./userRegister";
import { registerFailure } from "./userRegister";
import { DetailsStart } from "./userDetails";
import { DetailsFailure } from "./userDetails";
import { DetailsSuccess } from "./userDetails";
import { logout } from "./user";
import { userDetailsReset } from "./userDetails";
import { orderListMyReset } from "./orderList";
import { UpdateSuccess } from "./userUpdate";
import { UpdateStart } from "./userUpdate";
import { UpdateFailure } from "./userUpdate";
import { userListMySuccess } from "./userList";
import { userListMyRequest } from "./userList";
import { userListMyFailure } from "./userList";
import { userDeleteSuccess } from "./userDelete";
import { userDeleteRequest } from "./userDelete";
import { userDeleteFailure } from "./userDelete";
import { userListMyReset } from "./userList";
import { userUpdateProfileResetAdmin } from "./userUpdateAdmin";
import { UpdateStartAdmin } from "./userUpdateAdmin";
import { UpdateFailureAdmin } from "./userUpdateAdmin";
import { UpdateSuccessAdmin } from "./userUpdateAdmin";
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch(loginStart());

		const config = {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "true",
			},
		};
		const { data } = await axios.post(
			"http://127.0.0.1:5000/api/users/login",
			{ email, password },
			config
		);
		console.log(data);
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(
			loginFailure(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch(registerStart());

		const config = {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "true",
			},
		};
		const { data } = await axios.post(
			"/api/users",
			{ name, email, password },
			config
		);
		console.log(data);
		dispatch(registerSuccess(data));
	} catch (error) {
		dispatch(
			registerFailure(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch(DetailsStart());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/users/${id}`, config);

		dispatch(DetailsSuccess(data));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			localStorage.removeItem("persist:root");
			dispatch(logout());
			dispatch(userDetailsReset());
			dispatch(orderListMyReset());
			dispatch(userListMyReset());
		}
		dispatch(DetailsFailure(message));
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch(UpdateStart());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`/api/users/profile`, user, config);
		console.log(data);
		dispatch(UpdateSuccess(data));
		dispatch(loginSuccess(data));
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			localStorage.removeItem("persist:root");
			dispatch(logout());
			dispatch(userDetailsReset());
			dispatch(orderListMyReset());
			dispatch(userListMyReset());
		}
		dispatch(UpdateFailure(message));
	}
};

export const listUsers = () => async (dispatch, getState) => {
	try {
		dispatch(userListMyRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/users`, config);

		dispatch(userListMySuccess(data));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			localStorage.removeItem("persist:root");
			dispatch(logout());
			dispatch(userDetailsReset());
			dispatch(orderListMyReset());
			dispatch(userListMyReset());
		}
		dispatch(userListMyFailure(message));
	}
};

export const deleteUser = (id) => async (dispatch, getState) => {
	try {
		dispatch(userDeleteRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/users/${id}`, config);

		dispatch(userDeleteSuccess());
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			localStorage.removeItem("persist:root");
			dispatch(logout());
			dispatch(userDetailsReset());
			dispatch(orderListMyReset());
			dispatch(userListMyReset());
		}
		dispatch(userDeleteFailure(message));
	}
};

export const updateUser = (user) => async (dispatch, getState) => {
	try {
		dispatch(UpdateStartAdmin());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`/api/users/${user._id}`, user, config);

		dispatch(UpdateSuccessAdmin());

		dispatch(DetailsSuccess(data));

		dispatch(userDetailsReset());
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			localStorage.removeItem("persist:root");
			dispatch(logout());
			dispatch(userDetailsReset());
			dispatch(orderListMyReset());
			dispatch(userListMyReset());
		}
		dispatch(UpdateFailureAdmin(message));
	}
};
