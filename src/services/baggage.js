import Baggage from "../models/baggage.js";
import NotFoundError from "../errors/not-found-error.js";

const createBaggage = async (baggageData) => {
  const baggage = await Baggage.create(baggageData);
  return baggage;
};

const getAllBaggage = async (tripId, userId) => {
  const baggage = await Baggage.find({ trip: tripId, user: userId });
  return baggage;
};

const getBaggageById = async (id, userId, tripId) => {
  const baggage = await Baggage.findOne({
    _id: id,
    user: userId,
    trip: tripId,
  });
  if (!baggage) {
    throw new NotFoundError("Baggage not found");
  }
  return baggage;
};

const updateBaggageById = async (id, userId, tripId, baggageData) => {
  const baggage = await Baggage.findByIdAndUpdate(id, baggageData, { new: true });
  if (!baggage) {
    throw new NotFoundError("Baggage not found");
  }
  return baggage;
};

const deleteBaggage = async (id, userId, tripId) => {
  await getTripById(tripId, userId);
  const baggage = await Baggage.findOneAndDelete({
    _id: id,
    user: userId,
    trip: tripId,
  });
  if (!baggage) {
    throw new NotFoundError("Baggage not found");
  }
  return baggage;
};

export { createBaggage, getAllBaggage,getBaggageById, updateBaggageById, deleteBaggage};