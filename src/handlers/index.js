import { Router } from "express";
import USER_ROUTER from "./user.js";
import BAGGAGE_ROUTER from "./baggage.js";
import AUTH_Router from "./auth.js";
import TRIP_ROUTER from "./trip.js";

const Handlers = Router();

Handlers.use("/users", USER_ROUTER);
Handlers.use("/auth", AUTH_Router);
Handlers.use("/trips", TRIP_ROUTER);
Handlers.use("/:id/baggage", BAGGAGE_ROUTER);

export default Handlers;
