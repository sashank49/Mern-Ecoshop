import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const SearchBox = () => {
	const [keyword, setKeyword] = useState("");
	const history = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history(`/search/${keyword}`);
		} else {
			history("/");
		}
	};

	return (
		<Form onSubmit={submitHandler} block className="flex">
			<Form.Control
				type="text"
				name="q"
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Products..."
				className="mr-sm-2 ml-sm-5 mr-5"
			></Form.Control>
			<LinkContainer to={`/search/${keyword}/page/1`}>
				<Button type="submit" variant="outline-success" className="p-2 mr-100">
					Search
				</Button>
			</LinkContainer>
		</Form>
	);
};

export default SearchBox;
