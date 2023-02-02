import { getMessages, sendMessage } from "../controllers/messagesController";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { messageBodySchema, messageParamsSchema } from "../schemas/messageSchema";

const messagesRouter = Router();

messagesRouter.post("/:boardId", validateBody(messageBodySchema), validateParams(messageParamsSchema),sendMessage);
messagesRouter.get("/:boardId", validateBody(messageBodySchema), validateParams(messageParamsSchema), getMessages);

export default messagesRouter;