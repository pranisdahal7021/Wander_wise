import { createUser } from "./user.js";
import jwt from "jsonwebtoken"; // Import the jsonwebtoken library
import User from "../models/user.js";
import NotFoundError from "../errors/not-found-error.js";
import UnauthorizedError from "../errors/unauthorized-error.js";
import { compare } from "bcrypt";

export const registerUser = async (userData) => { // userdata contains info like email, password, etc.
  const user = await createUser(userData); 

  const token = jwt.sign(
    { userId: user._id.toString() },
    process.env.JWT_SECRET_KEY,

    { expiresIn: process.env.JWT_EXPIRES_IN, 

    }
  );
    return { 
    user, 
    token,
  };
}


export const login = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new NotFoundError("User with this email does not exist.");
  }

    const isPasswordValid = await compare(userData.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid password.");
    }
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return { 
      user, 
      token,
    };
};