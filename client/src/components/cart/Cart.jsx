import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
	const cartCount = useSelector((state) => state.products.cart);

	return (
		<div className="py-2 px-4  rounded-3xl bg-red-500 text-white flex justify-center items-center gap-x-2 ">
			My Cart
			<span className="text-black px-2  rounded-3xl bg-white text-xl">
				{cartCount.length >= 1 ? cartCount.length : 0}
			</span>
		</div>
	);
};

export default Cart;
