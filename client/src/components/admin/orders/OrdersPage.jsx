import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";
import { v4 as uuidv4 } from "uuid";
const OrdersPage = () => {
	const [orders, setorders] = useState([]);
	console.log(orders);

	const MappItems = () => {
		return orders.map((e) => <SingleOrder key={uuidv4()} props={e} />);
	};
	const fetchOrders = async () => {
		try {
			const { data, status } = await axios.get("/order");
			if (status === 201) {
				setorders(data);
			}
		} catch (e) {
			console.log(e.response.status);
			console.log(e.message);
		}
	};

	useEffect(() => {
		fetchOrders();
	}, []);

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-center items-center text-5xl my-5 font-thin">
				Orders
			</div>

			<div className="flex flex-col gap-y-3 justify-center items-center">
				<MappItems />
			</div>
		</div>
	);
};

export default OrdersPage;
