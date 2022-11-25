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
	deleteSingleProduct,
} = require("../controllers/ProductControllers");
const {
	saveUser,
	deleteAllUsers,
	loginUser,
	logoutUser,
	getAllUsers,
	deleteUser,
	getUser,
} = require("../controllers/UserControllers");
const {
	saveOrder,
	getAllOrders,
	deleteAllOrders,
	getUserOrders,
} = require("../controllers/OrdersControllers");
// const { authenticate } = require("../middlewares/authenticate");
// http://localhost:8000/

router.post("/product", upload.single("image"), addProduct);
router.get("/product", getAllProducts);
router.delete("/product", deleteProducts);
router.delete("/product/:id", deleteSingleProduct);
router.patch("/product", updateProduct);
router.get("/product/:id", singleProduct);
// User Routes
router.post("/logout", logoutUser);
router.post("/user", saveUser);
router.post("/login", loginUser);
router.delete("/user", deleteAllUsers);
router.delete("/user/:id", deleteUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUser);
// Orders Routes
router.post("/order", saveOrder);
router.get("/order", getAllOrders);
router.get("/order/:id", getUserOrders);
router.delete("/order", deleteAllOrders);

module.exports = router;
