const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const errorMiddleware = require("./middleware/error");

//config
dotenv.config();

app.use(express.json());
app.use(cookieParser())
// Route Imports
const product = require("./routes/productRoutes");
const user = require("./routes/userRoute");


// application routes
app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app