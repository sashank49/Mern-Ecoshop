import { createSlice } from "@reduxjs/toolkit";
const cartItemsFromStorage = JSON.parse(localStorage.getItem("persist:root"))
	? JSON.parse(localStorage.getItem("persist:root")).cart
	: [];
const cartReducer = createSlice({
	name: "cart",
	initialState: {
		cartItems: cartItemsFromStorage,
		shippingAddress: {},
		itemsPrice: 0,
		shippingPrice: 0,
		taxPrice: 0,
		totalPrice: 0,
	},
	reducers: {
		cartAddItem: (state, action) => {
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		},
		cartRemoveItem: (state, action) => {
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		},
		cartClearItems: (state) => {
			return {
				...state,
				cartItems: [],
			};
		},
		cartshippingaddress: (state, action) => {
			return {
				...state,
				shippingAddress: action.payload,
			};
		},
		savePaymentMethodaction: (state, action) => {
			return {
				...state,
				paymentMethod: action.payload,
			};
		},
	},
});

export const {
	cartAddItem,
	cartRemoveItem,
	cartClearItems,
	cartshippingaddress,
	savePaymentMethodaction,
} = cartReducer.actions;
export default cartReducer.reducer;
