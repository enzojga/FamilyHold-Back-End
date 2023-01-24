import { createBoard } from "../controllers/boardController";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { authenticateToken } from "../middlewares/autenticationMiddleware";
import { boardSchema } from "../schemas/boardSchema";

const boardRouter = Router();

boardRouter.post("/", authenticateToken, validateBody(boardSchema), createBoard);

export default boardRouter;