import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import SingleProduct from "./SingleProduct";

const ProductListing = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);

	useEffect(() => {
		dispatch(fetchProducts());
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
		<>
			<div className="flex flex-wrap gap-6 px-6 py-10">{mappingProducts}</div>
		</>
	);
};

export default ProductListing;
