const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose
	.connect(DB, {})
	.then(() => {
		console.log("Database is running");
	})
	.catch((e) => {
		console.log(e.message);
	});
