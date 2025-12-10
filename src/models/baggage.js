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
  },
  { timestamps: false }
);

const Baggage = model("Baggage", BaggageScheme);

export default Baggage;
