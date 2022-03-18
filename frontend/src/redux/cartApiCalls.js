import axios from "axios";
import {
	cartAddItem,
	cartRemoveItem,
	cartClearItems,
	cartshippingaddress,
	savePaymentMethodaction,
} from "./cart";

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	const data1 = data;
	dispatch(
		cartAddItem({
			product: data1._id,
			name: data1.name,
			image: data1.image,
			price: data1.price,
			countInStock: data1.countInStock,
			qty,
		})
	);

	// localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch(cartshippingaddress(data));

	localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch(savePaymentMethodaction(data));

	localStorage.setItem("paymentMethod", JSON.stringify(data));
};
