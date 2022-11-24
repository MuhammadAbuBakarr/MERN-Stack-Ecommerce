import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AddProduct = () => {
	const [image, setimage] = useState("");
	const [select, setselect] = useState();

	const [form, setform] = useState({
		id: uuidv4(),
		name: "",
		description: "",
		stock: 0,
		price: 0,
		category: "",
	});
	const changeImage = (e) => {
		const name = e.target.files[0];
		setimage(name);
	};

	let keyName, value;
	const handleInput = (e) => {
		keyName = e.target.name;
		value = e.target.value;

		setform({ ...form, [keyName]: value });
	};

	const postData = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("id", form.id);
		formData.append("name", form.name);
		formData.append("description", form.description);
		formData.append("stock", form.stock);
		formData.append("price", form.price);
		formData.append("category", select);
		formData.append("image", image);
		try {
			console.log("enter try");
			const res = await axios.post("/product", formData);
			console.log("exit try");
		} catch (e) {
			console.log(e.response.status);
			console.log(e.message);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center mt-20">
			<div className="font-thin text-2xl mb-6">Add Product here</div>
			<div className="flex flex-col w-72 space-y-4">
				<form encType="multipart/form-data">
					<select value={select} onChange={(e) => setselect(e.target.value)}>
						<option>Select Catagory</option>
						<option>Clothing</option>
						<option>Tech</option>
						<option>Jewelery</option>
						<option>Perfumes</option>
						<option>Other</option>
					</select>
					<input
						type="text"
						className="p-4 border-2 "
						placeholder="Enter name Here"
						name="name"
						value={form.name}
						onChange={handleInput}
					/>
					<textarea
						type="text"
						className="p-4 border-2 "
						placeholder="Enter description Here"
						name="description"
						value={form.description}
						onChange={handleInput}
					/>
					<input
						type="number"
						className="p-4 border-2 "
						placeholder="Enter Stock Here"
						value={form.stock === 0 ? "Enter Stock Here" : form.stock}
						onChange={handleInput}
						name="stock"
						id=""
					/>
					<input
						type="number"
						className="p-4 border-2 "
						placeholder="Enter Price Here"
						value={form.price === 0 ? "Enter Price Here" : form.price}
						onChange={handleInput}
						name="price"
					/>
					<input
						type="file"
						name="image"
						className="p-4 border-2 "
						onChange={changeImage}
					/>
					<button
						onClick={postData}
						className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
