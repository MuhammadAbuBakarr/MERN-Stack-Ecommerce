const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	id: { type: String, required: true },
	quantity: { type: Number, default: 1 },
});

const cartModal = mongoose.model("addtocart", cartSchema);
module.exports = cartModal;
