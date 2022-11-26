import React, { useEffect } from "react";
import Cart from "./cart/Cart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { fetchProducts } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const user = useSelector((state) => state.users);
	const state = useSelector((state) => state);
	console.log(state.products);
	// console.log(appProducts);

	const nav = useNavigate();
	const dispatch = useDispatch();

	const logOutUser = () => {
		dispatch(logoutUser());
		nav("/");
	};

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<>
			<div className="flex justify-around z-50 p-2 items-center bg-white sticky top-0 drop-shadow-xl ">
				<Link to="/">
					<div className=" text-slate-800 font-semibold text-xl">Home</div>
				</Link>
				{!user.isLoggedIn ? (
					<>
						<div>
							<Link to={"/login"}>
								<div className=" text-slate-800 font-semibold text-xl">
									Login
								</div>
							</Link>
						</div>
						<div>
							<Link to={"/signup"}>
								<div className=" text-slate-800 font-semibold text-xl">
									SignUp
								</div>
							</Link>
						</div>
					</>
				) : (
					<>
						<div>Welcome! {user.name}</div>
						<div className="cursor-pointer" onClick={logOutUser}>
							LogOut
						</div>
						{user.role === "admin" ? (
							<>
								<Link to={"/adminboard"}>
									<div>Dashboard</div>
								</Link>
							</>
						) : (
							<></>
						)}
						{user.role === "admin" ? (
							<></>
						) : (
							<Link to={"/myOrders"}>
								<div>My Orders</div>
							</Link>
						)}
					</>
				)}
				<div>
					<Link to={"/myCart"}>
						<Cart />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
