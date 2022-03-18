import axios from "axios";
import { orderCreateRequest } from "./order";
import { orderCreateSuccess } from "./order";
import { orderCreateFailure } from "./order";
import { orderDetailsSuccess } from "./orderDetails";
import { orderDetailsRequest } from "./orderDetails";
import { orderDetailsFailure } from "./orderDetails";
import { orderPaySuccess } from "./orderPay";
import { orderPayRequest } from "./orderPay";
import { orderPayFailure } from "./orderPay";
import { orderDeliverSuccess } from "./orderDeliver";
import { orderDeliverRequest } from "./orderDeliver";
import { orderDeliverFailure } from "./orderDeliver";
import { orderListMyRequest } from "./orderList";
import { orderListMySuccess } from "./orderList";
import { orderListMyFailure } from "./orderList";
import { logout } from "./user";
import { cartClearItems } from "./cart";
import { userDetailsReset } from "./userDetails";
import { orderListMyReset } from "./orderList";
import { userListMyReset } from "./userList";
import { orderListAdminSuccess } from "./orderListAdmin";
import { orderListAdminRequest } from "./orderListAdmin";
import { orderListAdminFailure } from "./orderListAdmin";

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch(orderCreateRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/orders`, order, config);

		dispatch(orderCreateSuccess(data));
		dispatch(cartClearItems());
		localStorage.removeItem("cartItems");
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
		dispatch(orderCreateFailure(message));
	}
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
	try {
		console.log(id);
		dispatch(orderDetailsRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders/${id}`, config);
		console.log(data);
		dispatch(orderDetailsSuccess(data));
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
		dispatch(orderDetailsFailure(message));
	}
};

export const payOrder =
	(orderId, paymentResult) => async (dispatch, getState) => {
		try {
			dispatch(orderPayRequest());

			const {
				user: { userInfo },
			} = getState();

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.put(
				`/api/orders/${orderId}/pay`,
				paymentResult,
				config
			);

			dispatch(orderPaySuccess(data));
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
			dispatch(orderPayFailure(message));
		}
	};

export const deliverOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch(orderDeliverRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/api/orders/${order._id}/deliver`,
			{},
			config
		);

		dispatch(orderDeliverSuccess(data));
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
		dispatch(orderDeliverFailure(message));
	}
};

export const listMyOrders = () => async (dispatch, getState) => {
	try {
		dispatch(orderListMyRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders/myorders`, config);
		console.log(data);
		dispatch(orderListMySuccess(data));
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
		dispatch(orderListMyFailure(message));
	}
};

export const listOrders = () => async (dispatch, getState) => {
	try {
		dispatch(orderListAdminRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		console.log("222");
		const { data } = await axios.get(`/api/orders`, config);
		console.log(data);
		dispatch(orderListAdminSuccess(data));
		console.log("111");
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
		dispatch(orderListAdminFailure(message));
	}
};
