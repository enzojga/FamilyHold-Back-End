import { createWarning } from "../controllers/warningsController";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { warningBodySchema, warningParamsSchema } from "../schemas/warningSchema";

const warningRouter = Router();

warningRouter.post("/:boardId", validateBody(warningBodySchema), validateParams(warningParamsSchema), createWarning);

export default warningRouter;