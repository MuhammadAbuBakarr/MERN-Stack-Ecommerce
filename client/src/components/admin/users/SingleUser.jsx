import axios from "axios";
import React from "react";

const SingleUser = ({ props, updateUser }) => {
	const { email, id, name, role } = props;

	const deleteUser = async () => {
		try {
			const { status } = await axios.delete(`/user/${id}`);
			if (status === 201) {
				const { data, status } = await axios.get("/user");
				if (status === 201) {
					updateUser(data);
				}
			}
		} catch (e) {
			if (e) {
				console.log(e.response.status);
				console.log(e.message);
			}
		}
	};

	return (
		<>
			<div className="flex gap-x-12 h-24 my-4 w-11/12 bg-slate-200 shadow-lg p-4 rounded-3xl justify-center items-center ">
				<div className="flex gap-x-14 text-lg font-medium justify-center items-center ">
					<div>Name: {name}</div>
					<div>Email: {email} </div>
					<div>Role: {role}</div>
					<div
						onClick={deleteUser}
						className="px-5 cursor-pointer hover:bg-red-700 rounded-3xl py-2 text-white font-thin tracking-wider bg-red-500"
					>
						Delete
					</div>
					<div className="px-5 cursor-pointer hover:bg-green-700 rounded-3xl py-2 text-white font-thin tracking-wider bg-green-500">
						Change To Admin
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleUser;
