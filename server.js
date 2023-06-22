const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./db/connect");
const UserRoutes = require("./routes/UserRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const authenticateUser = require("./middleware/authorization")
const cors = require("cors");
require("dotenv").config();

//object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v1/users", UserRoutes);

//error handlers
app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening on ${port}`));
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
start();
