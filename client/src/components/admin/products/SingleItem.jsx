import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";

const SingleItem = ({ props }) => {
	const { name, category, id, price, stock, image } = props;
	const dispatch = useDispatch();

	const deleteProduct = async () => {
		try {
			const { status } = await axios.delete(`/product/${id}`);
			if (status === 201) {
				dispatch(fetchProducts());
			}
		} catch (e) {
			if (e) {
				console.log(e.message);
			}
		}
	};

	return (
		<>
			<div className="flex gap-x-12 h-24 my-4 w-10/12 bg-slate-200 shadow-lg p-4 rounded-3xl justify-center items-center ">
				<img
					className="w-20 h-20 bg-center rounded-full shadow-lg"
					src={`uploads/${image}`}
				/>
				<div className="flex gap-x-14 text-lg font-medium justify-center items-center ">
					<div>{name}</div>
					<div>Category: {category}</div>
					<div>Stock Units: {stock}</div>
					<div>Price ${price}</div>
					<div
						onClick={deleteProduct}
						className="px-5 cursor-pointer hover:bg-red-700 rounded-3xl py-2 text-white font-thin tracking-wider bg-red-500"
					>
						Delete
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleItem;
