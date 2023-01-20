import { signUp } from "../controllers/usersController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", signUp);

export default userRouter;