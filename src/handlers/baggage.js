import { Router } from "express";
import {
  createBaggage,
  findAllBaggage,
  findBaggageById,
  updateBaggageById,
  deleteBaggageById,
} from "../services/baggage.js";

const BAGGAGE_ROUTER = Router();

BAGGAGE_ROUTER.post("/", async (req, res) => {
  const baggage = await createBaggage(req.body);
  res.status(201).json(baggage);
});

BAGGAGE_ROUTER.get("/", async (req, res) => {
  const baggages = await findAllBaggage();
  res.status(200).json(baggages);
});

BAGGAGE_ROUTER.get("/:id", async (req, res) => {
  const baggage = await findBaggageById(req.params.id);
  res.status(200).json(baggage);
});

BAGGAGE_ROUTER.patch("/:id", async (req, res) => {
  const baggage = await updateBaggageById(req.params.id, req.body);
  res.status(200).json(baggage);
});

BAGGAGE_ROUTER.delete("/:id", async (req, res) => {
  const baggage = await deleteBaggageById(req.params.id);
  res.status(200).json(baggage);
});

export default BAGGAGE_ROUTER;