import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";

const UsersPage = () => {
	const [users, setusers] = useState([]);

	const MappItems = () => {
		return users.map((e) => {
			return <SingleUser key={e._id} updateUser={setusers} props={e} />;
		});
	};
	const fetchUsers = async () => {
		try {
			const { data, status } = await axios.get("/user");
			if (status === 201) {
				setusers(data);
			}
		} catch (e) {
			console.log(e.response.status);
			console.log(e.message);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, [users]);

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-center items-center text-5xl my-5 font-thin">
				Users Page
			</div>

			<div className="flex flex-col gap-y-3 justify-center items-center">
				<MappItems />
			</div>
		</div>
	);
};

export default UsersPage;
