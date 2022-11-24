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
	saveOrder,
	getAllOrders,
	deleteAllOrders,
	getUserOrders,
} = require("../controllers/OrdersControllers");
// const { authenticate } = require("../middlewares/authenticate");

router.post("/product", upload.single("image"), addProduct);
router.get("/product", getAllProducts);
router.delete("/product", deleteProducts);
router.patch("/product", updateProduct);
router.get("/product/:id", singleProduct);
// User Routes
router.post("/logout", logoutUser);
router.post("/user", saveUser);
router.post("/login", loginUser);
router.delete("/user", deleteAllUsers);
// Orders Routes
router.post("/order", saveOrder);
router.get("/order", getAllOrders);
router.get("/order/:id", getUserOrders);
router.delete("/order", deleteAllOrders);

module.exports = router;
