const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
//config
dotenv.config();

const APP_PORT = 5000

//database connected
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));



app.listen(APP_PORT, () => {
    console.log(`Example app listening at http://localhost:${APP_PORT}`)
  })
  