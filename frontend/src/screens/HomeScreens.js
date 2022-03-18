import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { listProducts } from "../redux/productApiCalls";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
const HomeScreens = () => {
	const params = useParams;
	const keyword = params.keyword;
	console.log(keyword);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts(keyword));
	}, [dispatch, keyword]);

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	console.log(products);
	return (
		<>
			<Meta />
			<ProductCarousel />
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Product product={product} key={product._id} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreens;
