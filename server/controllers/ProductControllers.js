const productModal = require("../modals/productSchema");
const multer = require("multer");
const fs = require("fs");
var imageName = null;
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(
			null,
			"D:/Coding Projects/Redux ToolKit Practice/client/public/uploads/"
		);
	},
	filename: (req, file, callback) => {
		const replaced = file.originalname.slice(-6);

		imageName = Date.now() + "Product" + replaced;
		callback(null, imageName);
	},
});
exports.upload = multer({ storage: storage });

// Routes
exports.addProduct = async (req, res) => {
	const image = imageName;
	let { stock, price } = req.body;
	price = Number(price);
	stock = Number(stock);
	const payload = { ...req.body, stock, price, image };
	try {
		const response = await productModal.create(payload);
		console.log(response);
		res.status(200).json({
			status: "Product is Uploaded",
		});
	} catch (e) {
		console.log(e.message);
	}
};
exports.getAllProducts = (req, res) => {
	try {
		productModal.find({}, (err, data) => {
			res.status(201).json(data);
		});
	} catch (e) {
		console.log(e.message);
		res.status(401);
	}
};

exports.deleteProducts = async (req, res) => {
	try {
		const del = await productModal.deleteMany();

		res.status(204).json({
			status: `all products are deleted`,
			del,
		});
	} catch (e) {
		console.log(e.message);
	}
};
exports.deleteSingleProduct = async (req, res) => {
	const id = req.params;
	try {
		const del = await productModal.findOneAndDelete(id);
		res.status(201).json({
			mess: "deleted",
		});
	} catch (e) {
		if (e) {
			console.log(e.message);
			return res.status(401);
		}
	}
};

exports.updateProduct = async (req, res) => {
	const data = req.body;
	try {
		const updatedProduct = await productModal.findOneAndUpdate(data.id, data, {
			new: true,
		});
		res.status(200).json({
			status: "Product is Updated",
			updatedProduct,
		});
	} catch (e) {
		console.log(e.message);
	}
};

exports.singleProduct = (req, res) => {
	const id = req.params;
	try {
		const product = productModal.findOne(id, (err, data) => {
			if (!data) {
				return res.status(401).json({
					message: "Product Not Found",
				});
			}

			res.status(201).json(data);
		});
	} catch (error) {
		console.log(error.message);
	}
};
// Add to Cart Controllers
// exports.sendProductsToCart = async (req, res) => {
// 	const data = req.body;
// 	try {
// 		const cart = await cartModal.create(data);
// 		res.status(200).json({
// 			status: "Product is added",
// 			cartItems: cart,
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };
// exports.showCartItems = (req, res) => {
// 	try {
// 		cartModal.find({}, (err, data) => {
// 			res.status(200).json({
// 				results: data.length,
// 				status: "Add to Cart Products",
// 				data,
// 			});
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// exports.deleteCartItem = async (req, res) => {
// 	try {
// 		const id = req.body;
// 		if (!id) {
// 			return res.status(401).json({
// 				status: "Id not found product is not deleted",
// 			});
// 		}

// 		await cartModal.findOneAndDelete(id);
// 		res.status(200).json({
// 			mess: `this ${id} product is deleted from Cart`,
// 			id,
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// User Controllers
// exports.saveUser = async (req, res) => {
// 	const data = req.body;
// 	console.log(data);
// 	try {
// 		const exists = await User.findOne({ email: data.email });
// 		if (exists) {
// 			console.log("Email Already Exists");
// 			return res.status(401).json({
// 				message: "Email Already Exists",
// 			});
// 		}
// 		const salt = await bcrypt.genSalt(10);
// 		data.password = await bcrypt.hash(data.password, salt);
// 		data.cpassword = await bcrypt.hash(data.cpassword, salt);
// 		console.log(data);

// 		await User.create(data);
// 		res.status(200).json({
// 			message: "User is Stored Succesfully",
// 		});
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };
// exports.loginUser = async (req, res) => {
// 	const data = req.body;
// 	try {
// 		const myUser = await User.findOne({ email: data.email });

// 		if (!myUser) {
// 			return res.status(401).json({
// 				mess: "Cannot Login Because if wrong Info",
// 			});
// 		}
// 		const validPassword = await bcrypt.compare(data.password, myUser.password);
// 		if (!validPassword) {
// 			return res.status(401).json({
// 				message: "Wrong user Credentials",
// 			});
// 		}

// 		const token = jwt.sign({ id: myUser.id }, secretKey);
// 		console.log({ id: myUser.id });
// 		res.cookie("mycookie", token).status(200).json({
// 			message: "User Logged in Succesfully",
// 			name: myUser.name,
// 			email: myUser.email,
// 			token,
// 		});
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };

// exports.logoutUser = async (req, res) => {
// 	console.log("Logout route");
// 	await res.clearCookie("mycookie");
// 	await res.status(200).json({
// 		mess: "User Logged Out",
// 	});
// };

// exports.deleteAllUsers = async (req, res) => {
// 	try {
// 		const deleteAll = await User.deleteMany();
// 		console.log(deleteAll);

// 		res.status(200).json({
// 			messsage: "All users are deleted",
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// https://api.unsplash.com/search/photos?query=fastfood&client_id=-PAUtZTC0i8wrnQ59ylexUSddHugNzd61vIcyyqupz4
