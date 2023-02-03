import { createBoard, getBoards } from "../controllers/boardController";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { authenticateToken } from "../middlewares/autenticationMiddleware";
import { boardSchema } from "../schemas/boardSchema";
import warningRouter from "./warningRouter";
import messagesRouter from "./messagesRouter";
import userInfoRouter from "./userInfoRouter";
import taskRouter from "./taskRouter";

const boardRouter = Router();

boardRouter.post("/", validateBody(boardSchema), authenticateToken, createBoard);
boardRouter.use(authenticateToken);
boardRouter.get("/", getBoards);

boardRouter.use("/warning", warningRouter);
boardRouter.use("/message", messagesRouter);
boardRouter.use("/info", userInfoRouter);
boardRouter.use("/task", taskRouter);

export default boardRouter;