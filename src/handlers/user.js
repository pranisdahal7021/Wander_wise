import { Router } from "express";
import {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} from "../services/user.js";

import {createUserValidator, updateUserValidator,} from "../Validators/user.js";
import useValidators from "../middlewares/useValidators.js";

const USER_ROUTER = Router();

// const runValidation = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(new ValidationError("Validation failed", errors.mapped()));
//   }
//   next();
// };

USER_ROUTER.post(
  "/",
  useValidators(createUserValidator, updateUserValidator),
  async (req, res, next) => {
    try {
      const users = await createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

USER_ROUTER.get("/", async (req, res, next) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

USER_ROUTER.get("/:id", async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

USER_ROUTER.patch(
  "/:id",
  useValidators(updateUserValidator),
  async (req, res, next) => {
    try {
      const user = await updateUserById(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

USER_ROUTER.delete("/:id", async (req, res, next) => {
  try {
    const user = await deleteUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default USER_ROUTER;
