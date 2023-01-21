import { signIn, signUp } from "../controllers/usersController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

export default userRouter;