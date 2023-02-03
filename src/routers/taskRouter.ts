import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { taskSchemaBody, taskSchemaParams } from "../schemas/taskSchema";
import { messageParamsSchema } from "../schemas/messageSchema";
import { createTask, getBoardTasks, joinTask } from "../controllers/taskController";

const taskRouter = Router();

taskRouter.post("/:boardId", validateBody(taskSchemaBody), validateParams(messageParamsSchema), createTask);
taskRouter.get("/:boardId", validateParams(messageParamsSchema), getBoardTasks);
taskRouter.post("/join/:taskId", validateParams(taskSchemaParams),joinTask);

export default taskRouter;