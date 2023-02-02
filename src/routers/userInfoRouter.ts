import { upsertUserInfo } from "../controllers/userInfoController";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { userInfoBodySchema, userInfoParamsSchema } from "../schemas/userInfoSchema";

const userInfoRouter = Router();

userInfoRouter.post("/:boardId", validateBody(userInfoBodySchema), validateParams(userInfoParamsSchema),upsertUserInfo);

export default userInfoRouter;