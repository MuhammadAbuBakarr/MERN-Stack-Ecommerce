import React, { useState } from "react";
import Inventory from "./products/Inventory";
import UsersPage from "./users/UsersPage";
import OrdersPage from "./orders/OrdersPage";

const AdminDashboard = () => {
	const [field, setfield] = useState("products");

	const DisplayComponent = () => {
		if (field === "products") {
			return <Inventory />;
		} else if (field === "user") {
			return <UsersPage />;
		} else if (field === "orders") {
			return <OrdersPage />;
		}
	};

	return (
		<>
			<div className="flex flex-row">
				<div>
					<div className="w-64 absolute sm:relative  bg-gray-800 shadow md:h-full flex-col justify-between  sm:flex">
						<div className="px-8">
							<div className="h-16 w-full flex items-center"></div>
							<ul className="mt-12">
								<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
									<a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
										<span
											onClick={() => setfield("products")}
											className="text-sm ml-2"
										>
											Inventory
										</span>
									</a>
								</li>
								<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
									<a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
										<span
											onClick={() => setfield("user")}
											className="text-sm ml-2"
										>
											Users
										</span>
									</a>
								</li>
								<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
									<a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
										<span
											onClick={() => setfield("orders")}
											className="text-sm ml-2"
										>
											Orders
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<DisplayComponent />
			</div>
		</>
	);
};

export default AdminDashboard;
