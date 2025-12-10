import express from "express";
import connectDB from "./config/db.js";
import Handlers from "./handlers/index.js";
import errorMiddleware from "./middlewares/error.js";
import Auth_Router from "./handlers/auth.js";

const APP_SERVER = express();

connectDB()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});

APP_SERVER.get("/", (req, res) => {
  res.send("Hello Pranish");
});

APP_SERVER.use(express.json());
APP_SERVER.use("/", Handlers);
APP_SERVER.use(errorMiddleware);
APP_SERVER.use(Auth_Router);


APP_SERVER.listen(process.env.port, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
