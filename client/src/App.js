import "./index.css";
import ProductListing from "./components/products/ProductListing";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/cart/CartPage";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import AddProduct from "./components/products/AddProduct";
import ProductDetailPage from "./components/products/ProductDetailPage";
import MyOrders from "./components/orders/MyOrders";
import AdminDashboard from "./components/admin/AdminDashboard";
function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<ProductListing />} />
						<Route path="/:productId" element={<ProductDetailPage />} />
						<Route path="/myCart" element={<CartPage />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/addProduct" element={<AddProduct />} />
						<Route path="/myOrders" element={<MyOrders />} />
						<Route path="/adminboard" element={<AdminDashboard />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
