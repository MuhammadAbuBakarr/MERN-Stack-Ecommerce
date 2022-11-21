const cartModal = require("../modals/CartSchema");

exports.sendProductsToCart = async (req, res) => {
	const data = req.body;
	try {
		const cart = await cartModal.create(data);
		res.status(200).json({
			status: "Product is added",
			cartItems: cart,
		});
	} catch (error) {
		console.log(error.message);
	}
};
exports.showCartItems = (req, res) => {
	try {
		cartModal.find({}, (err, data) => {
			res.status(200).json({
				results: data.length,
				status: "Add to Cart Products",
				data,
			});
		});
	} catch (error) {
		console.log(error.message);
	}
};

exports.deleteCartItem = async (req, res) => {
	try {
		const id = req.body;
		if (!id) {
			return res.status(401).json({
				status: "Id not found product is not deleted",
			});
		}

		await cartModal.findOneAndDelete(id);
		res.status(200).json({
			mess: `this ${id} product is deleted from Cart`,
			id,
		});
	} catch (error) {
		console.log(error.message);
	}
};
