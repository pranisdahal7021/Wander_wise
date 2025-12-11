import { Router } from "express";
import USER_ROUTER from "./user.js";
import BAGGAGE_ROUTER from "./baggage.js";
import AUTH_Router from "./auth.js";
import { authMiddleware } from "../middlewares/auth.js";

const Handlers = Router();

Handlers.use("/users", USER_ROUTER);
Handlers.use("/auth", AUTH_Router);
Handlers.use("/baggage", BAGGAGE_ROUTER);


export default Handlers;
