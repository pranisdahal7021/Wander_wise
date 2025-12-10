import Baggage from "../models/baggage.js";

const createBaggage = async (data) => {
  const baggage = await Baggage.create(data);
  return baggage;
};

const findAllBaggage = async () => {
  const items = await Baggage.find({});
  return items;
};

const findBaggageById = async (id) => {
  const item = await Baggage.findById(id);
  return item;
};

const updateBaggageById = async (id, update) => {
  const updated = await Baggage.findByIdAndUpdate(id, update, { new: true });
  return updated;
};

const deleteBaggageById = async (id) => {
  const deleted = await Baggage.findByIdAndDelete(id);
  return deleted;
};

export { createBaggage, findAllBaggage, findBaggageById, updateBaggageById, deleteBaggageById };