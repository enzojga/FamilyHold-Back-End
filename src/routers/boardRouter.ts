import { createBoard, getBoards } from "../controllers/boardController";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { authenticateToken } from "../middlewares/autenticationMiddleware";
import { boardSchema } from "../schemas/boardSchema";
import warningRouter from "./warningRouter";

const boardRouter = Router();

boardRouter.post("/", validateBody(boardSchema), authenticateToken, createBoard);
boardRouter.get("/", authenticateToken, getBoards);
boardRouter.use("/warning", authenticateToken, warningRouter);

export default boardRouter;