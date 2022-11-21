import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	removeCart,
	increaseQty,
	decreaseQty,
} from "../../redux/productsSlice";

const SingleCartItem = (props) => {
	const [count, setcount] = useState(props.quantity);
	const dispatch = useDispatch();

	const decreaseCount = () => {
		if (count > 1) {
			setcount(count - 1);
			dispatch(decreaseQty(props.id));
		}
	};

	const increaseCount = () => {
		setcount(count + 1);
		dispatch(increaseQty(props.id));
	};

	return (
		<>
			<div className="flex justify-between shadow-sm items-center mt-6 pt-6">
				<div className="flex  items-center">
					<img
						alt=""
						src={`/uploads/${props.image}`}
						width="60"
						className="rounded-full "
					/>

					<div className="flex flex-col ml-3">
						<span className="md:text-md  font-medium">{props.title}</span>
						<span className="text-xs  font-light text-gray-400">
							Product id {props.id}
						</span>
					</div>
				</div>

				<div className="flex  justify-center items-center">
					<div className="pr-8  flex justify-center items-center">
						<button
							className="font-semibold p-1 cursor-pointer"
							onClick={decreaseCount}
						>
							-
						</button>
						<span className="p-3 flex items-center  bg-gray-100 text-center h-6 w-8  text-sm  mx-2">
							{count}
						</span>
						<button
							onClick={increaseCount}
							className="font-semibold cursor-pointer p-1 "
						>
							+
						</button>
					</div>

					<div className="pr-8 flex justify-between items-center  ">
						<span className="text-xs font-medium">
							${props.price * props.quantity}
						</span>
						<button
							onClick={() => dispatch(removeCart(props.id))}
							className="ml-5 font-thin  shadow-sm px-2 py-1 bg-red-500 rounded-2xl"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCartItem;
