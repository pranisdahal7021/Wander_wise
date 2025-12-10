import useValidators from "../middlewares/useValidators.js";
import { login, registerUser } from "../services/auth.js"; 

import { Router } from "express";
import { loginValidator } from "../Validators/auth.js";

const AUTH_Router = Router();

AUTH_Router.post("/register", async (req, res, next) => {
    try {
        const { user, token } = await register(req.body);
        res.status(201).json({ user, token });
    } catch (error) {
        next(error);
    }
});

AUTH_Router.post("/login",
    useValidators(loginValidator),
    async (req, res, next) => {
    try {
        const result = await login(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

export default AUTH_Router; 