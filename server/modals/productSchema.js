const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: false },
	image: { type: String, required: true },
	category: { type: String, required: true },
	stock: { type: Number, required: true },
	price: { type: Number, required: true },
});

const productModal = mongoose.model("products", productSchema);
module.exports = productModal;
