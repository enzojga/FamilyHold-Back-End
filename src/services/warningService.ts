import { notFoundError, unauthorizedError } from "../errors/errors";
import { boardRepositorie } from "../repositories/boardRepositorie";
import { warningRepositorie } from "../repositories/warningRepository";

const create = async (user_id: number, board_id: number, text: string) => {
    const verifyBoard = await boardRepositorie.getBoardById(board_id);

    if(!verifyBoard) {
        throw notFoundError();
    }

    const verifyUser = await boardRepositorie.getUserBoard(user_id, board_id);
    
    if(!verifyUser) {
        throw unauthorizedError();
    }

    if(!user_id) {
        throw unauthorizedError();
    }

    const warning = await warningRepositorie.create(user_id, board_id, text);
    return warning;
}

const getWarnings = async (boardId: number, user_id: number) => {
    const verifyUser = await boardRepositorie.getUserBoard(user_id, boardId);
    if(!verifyUser) {
        throw unauthorizedError();
    }
    const warnings = await warningRepositorie.getManyByBoardId(boardId);
    return warnings;
}

export const warningService = {
    create,
    getWarnings
}