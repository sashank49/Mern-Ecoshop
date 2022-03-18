import {
	ProductListSuccess,
	ProductListRequest,
	ProductListFailure,
} from "./product";
import axios from "axios";
import {
	ProductDetailsSuccess,
	ProductDetailsRequest,
	ProductDetailsFailure,
} from "./productDetails";
import { ProductDeleteFailure } from "./productDelete";
import { ProductDeleteSuccess } from "./productDelete";
import { ProductDeleteRequest } from "./productDelete";
import { userDetailsReset } from "./userDetails";
import { orderListMyReset } from "./orderList";
import { userListMyReset } from "./userList";
import { ProductCreateFailure } from "./productCreate";
import { ProductCreateSuccess } from "./productCreate";
import { ProductCreateRequest } from "./productCreate";
import { ProductUpdateRequest } from "./productUpdate";
import { ProductUpdateFailure } from "./productUpdate";
import { ProductUpdateSuccess } from "./productUpdate";
import { ProductReviewCreateSuccess } from "./productReview";
import { ProductReviewCreateRequest } from "./productReview";
import { ProductReviewCreateFailure } from "./productReview";
import { ProductTopRatedSuccess } from "./getTopProducts";
import { ProductTopRatedRequest } from "./getTopProducts";
import { ProductTopRatedFailure } from "./getTopProducts";

import { logout } from "./user";
export const listProducts =
	(keyword = "", pageNumber = "") =>
	async (dispatch) => {
		dispatch(ProductListRequest());
		try {
			const { data } = await axios.get(
				`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
			);

			dispatch(ProductListSuccess(data.products));
		} catch (err) {
			dispatch(
				ProductListFailure(
					err.response && err.response.data.message
						? err.response.data.message
						: err.message
				)
			);
		}
	};

export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch(ProductDetailsRequest());
		const { data } = await axios.get(`/api/products/${id}`);
		console.log(data);
		dispatch(ProductDetailsSuccess(data));
	} catch (error) {
		dispatch(
			ProductDetailsFailure(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
		dispatch(ProductDeleteRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/products/${id}`, config);

		dispatch(ProductDeleteSuccess());
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
		dispatch(ProductDeleteFailure(message));
	}
};

export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch(ProductCreateRequest());

		const {
			user: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/products`, {}, config);

		dispatch(ProductCreateSuccess(data));
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
		dispatch(ProductCreateFailure(message));
	}
};

export const updateProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch(ProductUpdateRequest());

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
			`/api/products/${product._id}`,
			product,
			config
		);

		dispatch(ProductUpdateSuccess(data));
		dispatch(ProductDetailsSuccess(data));
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
		dispatch(ProductUpdateFailure(message));
	}
};

export const createProductReview =
	(productId, review) => async (dispatch, getState) => {
		try {
			dispatch(ProductReviewCreateRequest());

			const {
				user: { userInfo },
			} = getState();

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			await axios.post(`/api/products/${productId}/reviews`, review, config);

			dispatch(ProductReviewCreateSuccess());
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
			dispatch(ProductReviewCreateFailure(message));
		}
	};

export const listTopProducts = () => async (dispatch) => {
	try {
		dispatch(ProductTopRatedRequest());

		const { data } = await axios.get(`/api/products/top`);

		dispatch(ProductTopRatedSuccess(data));
	} catch (error) {
		dispatch(
			ProductTopRatedFailure(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
