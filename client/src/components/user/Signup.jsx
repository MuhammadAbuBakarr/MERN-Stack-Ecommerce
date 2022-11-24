import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Link } from "react-router-dom";
import { emptyState } from "../../redux/productsSlice";
import { emptyState2 } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
	const dispatch = useDispatch();

	const resetState = () => {
		dispatch(emptyState([]));
		dispatch(emptyState2);
	};
	const [form, setform] = useState({
		id: uuidv4(),
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});

	let keyName, value;
	const handleInput = (e) => {
		keyName = e.target.name;
		value = e.target.value;
		setform({ ...form, [keyName]: value });
	};

	const isEmail = (email) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

	const userData = async (e) => {
		try {
			const { name, email, password, cpassword } = form;
			if (!name || !email || !password || !cpassword) {
				return console.log("Cannot Signup Must be an Error");
			} else if (!isEmail(email)) {
				return console.log("Please Enter Valid Email Address");
			} else if (password !== cpassword) {
				return console.log("Confirm Password Doesn't Match the Password");
			}
			e.preventDefault();
			console.log("posting to backend");
			const response = await axios.post("/user", form);

			setform({
				id: uuidv4(),
				name: "",
				email: "",
				password: "",
				cpassword: "",
			});
		} catch (e) {
			if (e.status === 401) {
				console.log("error");
				console.log(e.message);
			}
		}
	};

	return (
		<div className="bg-grey-lighter  mt-8  min-h-screen shadow-2xl flex flex-col">
			<div className="container bg-white  shadow-2xl max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 rounded  text-black w-full">
					<h1 className="mb-8 text-3xl text-center" onClick={resetState}>
						Sign up
					</h1>
					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="name"
						value={form.name}
						placeholder="Full Name"
						onChange={handleInput}
					/>
					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="email"
						value={form.email}
						placeholder="Email"
						onChange={handleInput}
					/>
					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="password"
						value={form.password}
						placeholder="Password"
						onChange={handleInput}
					/>
					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="cpassword"
						value={form.cpassword}
						placeholder="Confirm Password"
						onChange={handleInput}
					/>
					<button
						onClick={userData}
						className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
					>
						Create Account
					</button>
				</div>

				<div className="text-grey-dark  flex items-center space-x-2">
					<div>Already have an account?</div>
					<Link to="/login">
						<button className="no-underline px-4 py-2 rounded-lg bg-blue-500 border-b text-white border-blue text-blue hover:bg-blue-700">
							Log in
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
