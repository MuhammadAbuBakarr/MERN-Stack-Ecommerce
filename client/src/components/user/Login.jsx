import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const login = async () => {
		try {
			const { data, status } = await axios.post("/login", {
				email,
				password,
			});

			const { name, id, role } = data;

			if (status === 200 && role === "admin") {
				dispatch(loginUser({ name, id, role }));
				nav("/adminboard");
			} else if (status === 200 && role !== "admin") {
				dispatch(loginUser({ name, id, role }));
				nav("/");
			}
		} catch (e) {
			const status = e.response.status;
			if (status === 401) {
				window.alert("Cannot Login Because of wrong Info");
				setemail("");
				setpassword("");
			}
		}
	};
	return (
		<div className="bg-grey-lighter mt-8   min-h-screen shadow-2xl flex flex-col">
			<div className="container  bg-white shadow-2xl max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 rounded  text-black w-full">
					<h1 className="mb-8 text-3xl text-center">Sign In</h1>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="email"
						value={email}
						placeholder="Email"
						onChange={(e) => setemail(e.target.value)}
					/>
					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="password"
						value={password}
						placeholder="Password"
						onChange={(e) => setpassword(e.target.value)}
					/>

					<button
						onClick={login}
						className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
					>
						Login
					</button>
				</div>

				<div className="text-grey-dark  flex items-center space-x-2">
					<div>Don't have an account?</div>
					<Link to="/signup">
						<button className="no-underline px-4 py-2 rounded-lg bg-blue-500 border-b text-white border-blue text-blue hover:bg-blue-700">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
