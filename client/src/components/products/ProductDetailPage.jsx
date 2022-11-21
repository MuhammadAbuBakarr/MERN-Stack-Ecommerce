import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetailPage = () => {
	const dispatch = useDispatch();
	const obj = {
		title: "ProductName",
		category: "category",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat error aperiam mollitia deleniti incidunt earum quam. Nam atque facilis voluptates.",
		price: 300,
		image:
			"https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=740&t=st=1668981552~exp=1668982152~hmac=8d18eb408545a14bc0f7ff0aa89f6f4a7a9dc822ffb9a7c104fe57571d4dee08",
	};

	const CheckItemInCart = () => {
		// const itemPresent = cart.find((e) => e.id === props.id);
		const itemPresent = false;
		if (itemPresent) {
			return <RemoveFromCart />;
		} else {
			return <AddToCart />;
		}
	};
	const RemoveFromCart = () => {
		return (
			<button
				// onClick={removeFromCart}
				className="hover:bg-black  font-medium text-base leading-4 text-white bg-red-600 w-full py-5 lg:mt-12 mt-6"
			>
				Remove From Cart
			</button>
		);
	};

	const AddToCart = () => {
		return (
			<button
				// onClick={addToCart}
				className="hover:bg-black  font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
			>
				Add To Cart
			</button>
		);
	};

	return (
		<div className="2xl:container  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
			<div className="flex justify-center items-center lg:flex-row flex-col gap-8">
				<div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
					<h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">
						{obj.title}
					</h2>
					<p className="mt-6  font-thin">{obj.category}</p>

					<p className="font-normal text-base leading-6 text-gray-600  mt-8">
						{obj.description}
					</p>
					<p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
						${obj.price}
					</p>

					{/* <button className=" hover:bg-black  font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6  ">
						Add to Cart
					</button> */}
					<CheckItemInCart />
				</div>

				<div className="w-full sm:w-96 ml-20 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
					<div className="w-full lg:w-8/12  flex justify-center items-center">
						<img src={obj.image} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
