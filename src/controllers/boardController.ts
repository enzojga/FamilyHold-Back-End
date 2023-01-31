import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";
import { Response } from "express";
import httpStatus from "http-status";
import { boardService } from "../services/boardService";

export const createBoard = async (req: AuthenticatedRequest, res: Response) => {
    const { name } = req.body;
    try {
        const board = await boardService.create(req.userId, name);
        return res.status(httpStatus.CREATED).send(board);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const getBoards = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const boards: any = await boardService.getBoardsByUserId(req.userId);
        return res.status(httpStatus.OK).send(boards);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}