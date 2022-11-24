import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/productsSlice";
import SingleProduct from "./SingleProduct";

// const api = "https://fakestoreapi.com/products/";

const ProductListing = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);

	const fetchProducts = async () => {
		try {
			const { status, data } = await axios.get("/product");
			if (status === 200) {
				dispatch(addProducts(data));
			} else {
				window.alert("Please Reload The Page");
			}
		} catch (e) {
			console.log(e.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const mappingProducts = products.map((product) => {
		const { id, name, image, category, price } = product;
		return (
			<SingleProduct
				key={id}
				id={id}
				name={name}
				image={image}
				category={category}
				price={price}
			/>
		);
	});

	return (
		<div className="flex flex-wrap gap-6 px-6 py-10">{mappingProducts}</div>
	);
};

export default ProductListing;
