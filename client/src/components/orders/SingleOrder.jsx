import React from "react";
import { useSelector } from "react-redux";

const SingleOrder = (props) => {
	const id = props.id;
	const orderId = props.orderId;
	const allProducts = useSelector((s) => s.products.items);
	const product = allProducts.find((item) => item.id === id);
	return (
		<>
			<div className="flex gap-x-12 my-4 p-5 shadow-lg bg-white rounded-3xl justify-center items-center   w-5/6">
				<img src={`/uploads/${product.image}`} className="w-28 rounded-2xl" />
				<div className="flex gap-x-10  text-base font-medium justify-center items-center ">
					<div>{product.name}</div>
					<div>Qty: {props.qty}</div>
					<div>
						OrderId:
						<span className="ml-2 font-thin text-xs">
							{orderId.substring(0, 8)}...
						</span>
					</div>
					<div>Price ${product.price * props.qty}</div>
					<div className="px-5 rounded-3xl py-2 text-white font-thin tracking-wider bg-green-500">
						Ordered
					</div>
				</div>
			</div>

			{/* <div className="flex justify-between shadow-sm items-center mt-6 pt-6">
				<div className="flex  items-center">
					<img
						alt=""
						// src={`/uploads/${props.image}`}
						width="60"
						className="rounded-full "
					/>

					<div className="flex flex-col ml-3">
						<span className="md:text-md  font-medium">{product.name}</span>
						<span className="text-xs  font-light text-gray-400">
							Order Id {orderId.substring(0, 8)}...
						</span>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<div className="pr-8 flex justify-between items-center  ">
						<span className="text-xs font-medium">$Total PRice</span>
						<span className="ml-5 font-thin  shadow-sm px-2 py-1 bg-red-500 rounded-2xl">
							Ordered
						</span>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default SingleOrder;
