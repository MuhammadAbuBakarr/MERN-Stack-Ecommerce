import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProducts } from "../../redux/userSlice";
import SingleOrder from "./SingleOrder";
import { v4 as uuidv4 } from "uuid";

const MyOrders = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.users.id);
	const orders = useSelector((state) => state.users.orders);
	const NoOrdersMessage = () => {
		if (orders.length === 0) {
			return (
				<div className="text-2xl bg-red-500 p-3 rounded-3xl text-white font-thin tracking-wide">
					You Don't Have Any Orders Pending
				</div>
			);
		}
	};

	const MappingOrders = () => {
		return orders.map((e) => {
			return (
				<>
					<SingleOrder
						key={uuidv4()}
						orderId={e._id}
						qty={e.quantity}
						id={e.id}
					/>
				</>
			);
		});
	};

	const fetchingOrders = async () => {
		try {
			const { status, data } = await axios.get(`/order/${userId}`);
			if (status === 201) {
				dispatch(userProducts(data));
				return;
			}
		} catch (e) {
			console.log(e.response.status);
			console.log(e.message);
		}
	};

	useEffect(() => {
		fetchingOrders();
	}, []);

	return (
		<>
			<div className="bg-slate-700 h-screen">
				<div className=" flex justify-center">
					<div className="bg-slate-300 justify-center items-center rounded-2xl w-9/12 p-8 flex flex-col  ">
						<div className="p-9   text-3xl font-medium ">My Orders</div>
						<NoOrdersMessage />
						<MappingOrders />
					</div>
				</div>
			</div>
		</>
	);
};

export default MyOrders;
