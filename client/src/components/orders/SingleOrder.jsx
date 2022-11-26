import React from "react";
import { useSelector } from "react-redux";

const SingleOrder = (props) => {
	const id = props.id;
	const orderedDate = props.date.replaceAll(" ", "/");
	const allProducts = useSelector((s) => s.products.items);
	const product = allProducts.find((item) => item.id === id);
	return (
		<>
			<div className="flex gap-x-12 my-4 h-40 border-2 p-5 shadow-lg bg-white rounded-3xl justify-center items-center   w-5/6">
				<img src={`/uploads/${product.image}`} className="w-28 rounded-2xl" />
				<div className="flex gap-x-10  text-base font-medium justify-center items-center ">
					<div>{product.name}</div>
					<div>Qty: {props.qty}</div>
					<div>
						Ordered At:
						<span className="ml-2 font-thin ">{orderedDate}</span>
					</div>
					<div>Price ${product.price * props.qty}</div>
					<div className="px-5 rounded-3xl py-2 text-white font-thin tracking-wider bg-green-500">
						Ordered
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleOrder;
