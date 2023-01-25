import { notFoundError, unauthorizedError } from "../errors/errors";
import { boardRepositorie } from "../repositories/boardRepositorie";
import { warningRepositorie } from "../repositories/warningRepository";

const create = async (user_id: number, board_id: number, text: string) => {
    const verifyBoard = await boardRepositorie.getBoardById(board_id);

    if(!verifyBoard) {
        throw notFoundError();
    }

    const verifyUser = await boardRepositorie.getUserBoard(user_id, board_id);

    if(!user_id) {
        throw unauthorizedError();
    }

    const warning = await warningRepositorie.create(user_id, board_id, text);
    return warning;
}

export const warningService = {
    create,
}