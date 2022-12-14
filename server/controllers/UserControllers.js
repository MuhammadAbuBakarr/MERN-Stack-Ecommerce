const User = require("../modals/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.saveUser = async (req, res) => {
	const data = req.body;
	try {
		const exists = await User.findOne({ email: data.email });
		if (exists) {
			console.log("Email Already Exists");
			return res.status(401).json({
				message: "Email Already Exists",
			});
		}
		const salt = await bcrypt.genSalt(10);
		data.password = await bcrypt.hash(data.password, salt);
		data.cpassword = await bcrypt.hash(data.cpassword, salt);

		await User.create(data);
		res.status(201).json({
			message: "User is Stored Succesfully",
		});
	} catch (e) {
		if (e) {
			res.status(401);
		}
		console.log(e.message);
	}
};
exports.loginUser = async (req, res) => {
	const data = req.body;
	try {
		const myUser = await User.findOne({ email: data.email });

		if (!myUser) {
			return res.status(401).json({
				mess: "Cannot Login Because of Wrong Info",
			});
		}
		const validPassword = await bcrypt.compare(data.password, myUser.password);
		if (!validPassword) {
			return res.status(401).json({
				message: "Wrong user Credentials",
			});
		}

		const token = jwt.sign({ id: myUser.id }, secretKey);
		res.cookie("mycookie", token).status(200).json({
			message: "User Logged in Succesfully",
			id: myUser.id,
			name: myUser.name,
			email: myUser.email,
			role: myUser.role,
			token,
		});
	} catch (e) {
		console.log(e.message);
	}
};
exports.getAllUsers = (req, res) => {
	try {
		User.find({}, (err, data) => {
			res.status(201).json(data);
		});
	} catch (e) {
		console.log(e.message);
		res.status(401);
	}
};

exports.logoutUser = async (req, res) => {
	console.log("Logout route");
	await res.clearCookie("mycookie");
	await res.status(200).json({
		mess: "User Logged Out",
	});
};

exports.deleteAllUsers = async (req, res) => {
	try {
		const deleteAll = await User.deleteMany();
		console.log(deleteAll);

		res.status(200).json({
			messsage: "All users are deleted",
		});
	} catch (error) {
		console.log(error.message);
	}
};
exports.deleteUser = async (req, res) => {
	try {
		const id = req.params;
		await User.findOneAndDelete(id);
		res.status(201);
	} catch (e) {
		if (e) {
			res.status(401);
			console.log(e.message);
		}
	}
};

exports.getUser = async (req, res) => {
	try {
		const id = req.params;
		const user = await User.findOne(id);
		res.status(201).json(user.name);
	} catch (e) {
		if (e) {
			res.status(401);
			console.log(e.message);
		}
	}
};
