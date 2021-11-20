const express = require("express");
const app = express();
//const dotenv = require("dotenv")

const errorMiddleware = require("./middleware/error");

//config
//dotenv.config();

app.use(express.json());

// Route Imports
const product = require("./routes/productRoutes");


// application routes
app.use("/api/v1", product);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app