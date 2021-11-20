const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
//config
dotenv.config();

const APP_PORT = 5000
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
//database connected
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))



  const server = app.listen(APP_PORT, () => {
    console.log(`Example app listening at http://localhost:${APP_PORT}`)
  })

  // Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

  