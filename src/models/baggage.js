import { Schema, model } from "mongoose";

const BaggageScheme = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: false }
);

const Baggage = model("Baggage", BaggageScheme);

export default Baggage;
