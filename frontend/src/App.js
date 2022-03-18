import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import HomeScreens from "./screens/HomeScreens";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreens from "./screens/ProductScreens";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import OrderListScreen from "./screens/OrderListScreen";
import { useSelector } from "react-redux";

function App() {
	const { userInfo } = useSelector((state) => state.user);
	console.log(userInfo);
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						<Route
							path="/order/:id"
							element={userInfo ? <OrderScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/shipping"
							element={userInfo ? <ShippingScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/payment"
							element={userInfo ? <PaymentScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/placeorder"
							element={userInfo ? <PlaceOrderScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/userlist"
							element={userInfo ? <UserListScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/user/:id/edit"
							element={userInfo ? <UserEditScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/productlist"
							element={userInfo ? <ProductListScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/productlist/:pageNumber"
							element={userInfo ? <ProductListScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/product/:id/edit"
							element={userInfo ? <ProductEditScreen /> : <LoginScreen />}
							exact
						/>
						<Route
							path="/admin/orderlist"
							element={userInfo ? <OrderListScreen /> : <LoginScreen />}
							exact
						/>

						<Route path="/product/:id" element={<ProductScreens />} />
						<Route path="/cart/:id" element={<CartScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route
							path="/search/:keyword/page/:pageNumber"
							element={<HomeScreens />}
							exact
						/>
						<Route path="/" element={<HomeScreens />} exact />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}
export default App;
