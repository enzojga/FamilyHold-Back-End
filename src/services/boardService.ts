import { conflictError } from "../errors/errors";
import { boardRepositorie } from "../repositories/boardRepositorie";

const create = async (userId: number, name: string, icon: number, invite: string) => {
    const verifyInvite = await boardRepositorie.getBoardByInvite(invite);
    if(verifyInvite) {
        throw conflictError('Convite já cadastrado');
    }
    const board = await boardRepositorie.create(userId, name, icon, invite);
    await boardRepositorie.joinBoard(userId, board.id);
    return board;
}

const getBoardsByUserId = async (userId: number) => {
    const boards = await boardRepositorie.getBoardsByUserId(userId);
    return boards;
}

const getById = async () => {
    
}

export const boardService = {
    create,
    getBoardsByUserId
}