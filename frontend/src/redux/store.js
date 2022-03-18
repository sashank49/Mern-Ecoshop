import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productListReducer from "./product";
import productDetailsReducer from "./productDetails";
import cartReducer from "./cart";
import userLoginReducer from "./user";
import userRegisterReducer from "./userRegister";
import userDetailsReducer from "./userDetails";
import userUpdateReducer from "./userUpdate";
import orderCreateReducer from "./order";
import orderDetailsReducer from "./orderDetails";
import orderPayReducer from "./orderPay";
import orderDeliverReducer from "./orderDeliver";
import orderListMyReducer from "./orderList";
import orderListAdminReducer from "./orderListAdmin";
import userListReducer from "./userList";
import userDeleteReducer from "./userDelete";
import userUpdateAdminReducer from "./userUpdateAdmin";
import productDeleteReducer from "./productDelete";
import productCreateReducer from "./productCreate";
import productUpdateReducer from "./productUpdate";
import productReviewReducer from "./productReview";
import getTopProductsReducer from "./getTopProducts";
const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productDelete: productDeleteReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productReviewCreate: productReviewReducer,
	productTopRated: getTopProductsReducer,
	cart: cartReducer,
	user: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateAdminReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderDeliver: orderDeliverReducer,
	orderListMy: orderListMyReducer,
	orderList: orderListAdminReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
