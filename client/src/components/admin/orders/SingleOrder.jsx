import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleOrder = ({ props }) => {
	const { id, quantity, userId } = props;
	const [user, setuser] = useState();
	const products = useSelector((s) => s.products.items);
	const item = products.find((e) => e.id === id);

	const getUser = async () => {
		const { data, status } = await axios.get(`/user/${userId}`);
		if (status === 201) {
			setuser(data);
		}
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			<div className="flex gap-x-12 h-24 my-4 w-10/12 bg-slate-200 shadow-lg p-4 rounded-3xl justify-center items-center ">
				<img
					src={`uploads/${item.image}`}
					className="w-20 h-20 bg-center rounded-full shadow-lg"
				/>
				<div className="flex gap-x-14 text-lg font-medium justify-center items-center ">
					<div>Ordered By: {user}</div>
					<div>{item.name}</div>
					<div>Category: {item.category} </div>
					<div>Quantity: {quantity}</div>
					<div>Price ${item.price * quantity}</div>
				</div>
			</div>
		</>
	);
};

export default SingleOrder;
