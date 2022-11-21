const express = require("express");
const router = express.Router();
require("../database/connection");

const {
	addProduct,
	getAllProducts,
	deleteProducts,
	updateProduct,
	singleProduct,
	upload,
} = require("../controllers/ProductControllers");
const {
	saveUser,
	deleteAllUsers,
	loginUser,
	logoutUser,
} = require("../controllers/UserControllers");
const {
	sendProductsToCart,
	showCartItems,
	deleteCartItem,
} = require("../controllers/CartControllers");
const { authenticate } = require("../middlewares/authenticate");

router.post("/product", upload.single("image"), addProduct);
router.get("/product", getAllProducts);
router.delete("/product", deleteProducts);
router.patch("/product", updateProduct);
router.get("/product/:id", singleProduct);
// Add to Cart Routes
router.post("/addToCart", sendProductsToCart);
router.get("/addToCart", showCartItems);
router.delete("/addToCart", deleteCartItem);
// User Routes
router.post("/logout", logoutUser);
router.post("/user", saveUser);
router.post("/login", loginUser);
router.delete("/user", deleteAllUsers);
// User Authentication
router.get("/auth", authenticate, (req, res) => {
	res.status(200).json({
		data: req.rootUser,
	});
});

module.exports = router;
