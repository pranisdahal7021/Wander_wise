import { Router } from "express";
import { createTrip } from "../services/trip.js";
import { createTripValidator } from "../Validators/trip.js";
import useValidators from "../middlewares/useValidators.js";

const TRIP_ROUTER = Router();

TRIP_ROUTER.post(
  "/",
  useValidators(createTripValidator),
  async (req, res, next) => {
    try {
      const trip = await createTrip({ ...req.body, user: req.user.userId });
      res.status(201).json(trip);
    } catch (error) {
      next(error);
    }
  }
);

export default TRIP_ROUTER;
