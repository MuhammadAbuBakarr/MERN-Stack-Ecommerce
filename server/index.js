const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
dotenv.config({ path: "./config.env" });
const port = process.env.port;
require("./database/connection");
// app.use(bodyParser());
app.use(express.json());
app.use(require("./routes/routes"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
