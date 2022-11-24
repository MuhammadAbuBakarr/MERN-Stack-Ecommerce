import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../redux/productsSlice";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
	const user = useSelector((state) => state.users.isLoggedIn);
	const product = {
		id: props.id,
		name: props.name,
		price: props.price,
		quantity: 1,
		image: props.image,
	};

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.products.cart);
	const RemoveFromCart = () => {
		return (
			<button
				onClick={removeFromCart}
				className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
			>
				Remove From Cart
			</button>
		);
	};

	const AddToCart = () => {
		return (
			<button
				onClick={addToCart}
				className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
			>
				Add To Cart
			</button>
		);
	};
	const CheckItemInCart = () => {
		const itemPresent = cart.find((e) => e.id === props.id);
		if (itemPresent) {
			return <RemoveFromCart />;
		} else {
			return <AddToCart />;
		}
	};

	useEffect(() => {
		CheckItemInCart();
	}, [cart]);

	const addToCart = () => {
		if (user) {
			dispatch(addCart(product));
		} else {
			window.alert("Please Login First");
		}
	};
	const removeFromCart = () => {
		dispatch(removeCart(props.id));
	};

	return (
		<>
			<div className="bg-white shadow-xl flex flex-col justify-center items-center border border-slate-300   h-96  rounded-lg w-60 ">
				<img
					className="rounded-t-lg w-52  p-8"
					src={`/uploads/${props.image}`}
					alt="product image"
				/>

				<div className="px-5 pb-5">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight text-center dark:text-white">
						<Link to={`${props.id}`}>{props.name}</Link>
					</h3>

					<div className="flex items-center mt-2.5 mb-5">
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							{props.category}
						</span>
					</div>
					<div className="flex items-center justify-between gap-x-4">
						<span className="text-3xl font-bold text-gray-900  dark:text-white">
							${props.price}
						</span>

						<CheckItemInCart />
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
