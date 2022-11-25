import React from "react";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const Inventory = () => {
	const products = useSelector((s) => s.products.items);

	const MappItems = () => {
		return products.map((e) => {
			return <SingleItem key={e.id} props={e} />;
		});
	};

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-center items-center text-5xl my-5 font-thin">
				Inventory
			</div>
			<div className="flex justify-center items-center">
				<Link to="/addProduct">
					<div className="flex justify-center w-36 text-white rounded-2xl items-center text-lg cursor-pointer hover:bg-green-700 my-4 bg-green-500 p-2 font-thin">
						Add Products
					</div>
				</Link>
			</div>
			<div className="flex flex-col gap-y-3 justify-center items-center">
				<MappItems />
			</div>
		</div>
	);
};

export default Inventory;
