import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../redux/productsSlice";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();

	const allProducts = useSelector((state) => state.products.items);
	const cart = useSelector((state) => state.products.cart);
	const user = useSelector((state) => state.users.isLoggedIn);

	const item = allProducts.find((prod) => prod.id === productId);

	const CheckItemInCart = () => {
		const itemPresent = cart.find((e) => e.id === productId);
		if (itemPresent) {
			return <RemoveFromCart />;
		} else {
			return <AddToCart />;
		}
	};
	const RemoveFromCart = () => {
		return (
			<button
				onClick={removeFromCart}
				className="hover:bg-black  font-medium text-base leading-4 text-white bg-red-600 w-full py-5 lg:mt-12 mt-6"
			>
				Remove From Cart
			</button>
		);
	};

	const AddToCart = () => {
		return (
			<button
				onClick={addToCart}
				className="hover:bg-black  font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
			>
				Add To Cart
			</button>
		);
	};

	const addToCart = () => {
		if (user) {
			dispatch(addCart({ ...item, quantity: 1 }));
		} else {
			window.alert("Please Login First");
		}
	};
	const removeFromCart = () => {
		dispatch(removeCart(productId));
	};

	return (
		<div className="2xl:container  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
			<div className="flex justify-center items-center lg:flex-row flex-col gap-8">
				<div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
					<h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">
						{item.name}
					</h2>
					<p className="mt-6  font-thin">{item.category}</p>

					<p className="font-normal text-base leading-6 text-gray-600  mt-8">
						{item.description}
					</p>
					<div className=" flex gap-x-12 items-start justify-start ">
						<p className="font-semibold lg:text-2xl text-xl lg:leading-6 tracking-wider  mt-6 dark:text-white">
							${item.price}
						</p>
						<p className="font-thin  text-slate-500 lg:leading-6 leading-5  mt-6 dark:text-white">
							In Stock ({item.stock})
						</p>
					</div>

					<CheckItemInCart />
				</div>

				<div className="w-full sm:w-96 ml-20 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
					<div className="w-full lg:w-8/12  flex justify-center items-center">
						<img src={`/uploads/${item.image}`} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
