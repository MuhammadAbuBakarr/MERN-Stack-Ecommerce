const ordersModel = require("../modals/OrdersSchema");

exports.saveOrder = async (req, res) => {
	try {
		await ordersModel.create(req.body);
		res.status(201).json({
			message: "Order is posted",
		});
	} catch (e) {
		console.log(e.message);
	}
};
exports.getAllOrders = (req, res) => {
	try {
		ordersModel.find({}, (err, data) => {
			res.status(201).json(data);
		});
	} catch (e) {
		console.log(e.message);
		res.status(401);
	}
};
exports.getUserOrders = (req, res) => {
	const id = req.params;
	const obj = { userId: id.id };

	try {
		ordersModel.find(obj, (err, data) => {
			res.status(201).json(data);
		});
	} catch (e) {
		console.log(e.message);
		res.status(401);
	}
};

exports.deleteAllOrders = async (req, res) => {
	try {
		await ordersModel.deleteMany();
		res.status(201).json({
			mess: "Products are deleted",
		});
	} catch (e) {
		console.log(e.message);
		res.status(401);
	}
};
