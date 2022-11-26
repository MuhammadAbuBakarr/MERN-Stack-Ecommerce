const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	id: { type: String, required: true },
	userId: { type: String, required: true },
	quantity: { type: Number, required: true },
	date: { type: String, default: new Date().toDateString() },
});

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
