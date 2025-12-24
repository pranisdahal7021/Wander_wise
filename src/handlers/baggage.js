import { Router } from "express";
import {
  createBaggage,
  getAllBaggage,
  getBaggageById,
  updateBaggageById,
  deleteBaggage,
} from "../services/baggage.js";

const BAGGAGE_ROUTER = Router({ mergeParams: true });

BAGGAGE_ROUTER.post("/", async (req, res) => {
  const baggage = await createBaggage(req.body);
  res.status(201).json(baggage);
});

BAGGAGE_ROUTER.get("/", async (req, res) => {
  const baggages = await getAllBaggage();
  res.status(200).json(baggages);
});

BAGGAGE_ROUTER.get("/:id", async (req, res) => {
  const baggage = await getBaggageById(req.params.id);
  res.status(200).json(baggage);
});

BAGGAGE_ROUTER.patch("/:id", async (req, res) => {
  const baggage = await updateBaggageById(req.params.id, req.body);
  res.status(200).json(baggage);
});

BAGGAGE_ROUTER.delete("/:id", async (req, res) => {
  const baggage = await deleteBaggage(req.params.id);
  res.status(200).json(baggage);
});

export default BAGGAGE_ROUTER;
