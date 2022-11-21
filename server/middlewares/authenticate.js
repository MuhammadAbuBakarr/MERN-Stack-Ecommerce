const jwt = require("jsonwebtoken");
const User = require("../modals/UserSchema");

exports.authenticate = async (req, res, next) => {
	try {
		const str = req.headers.cookie;
		// console.log(str);
		if (str === undefined) {
			return res.status(401).json({
				mess: "User Is not Logged In",
			});
		}
		const cookie = str.split("=");

		const token = cookie[1];

		const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

		const rootUser = await User.findOne({ id: verifyToken.id });

		req.token = token;
		req.rootUser = rootUser;
		req.userId = rootUser.id;
		next();
	} catch (e) {
		console.log(e.message);
	}
};
