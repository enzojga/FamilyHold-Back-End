import { userInfoService } from "../services/userInfoService";
import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";

export const upsertUserInfo = async (req: AuthenticatedRequest, res: Response) =>  {

    const { picture, nickname, status } = req.body;
    const boardId  = Number(req.params.boardId);
    try {
        await userInfoService.upsert(boardId, req.userId, picture, nickname, status);
        return res.sendStatus(httpStatus.OK);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}
