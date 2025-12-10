import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (email) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

  UserSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
        this.password = await hash(this.password, 10);
      }
      next();
    });

const User = model("User", UserSchema);

export default User;