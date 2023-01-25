import { boardRepositorie } from "../repositories/boardRepositorie";

const create = async (userId: number, name: string) => {
    const board = await boardRepositorie.create(userId, name);
    await boardRepositorie.joinBoard(userId, board.id);
    return board;
}

const getById = async () => {
    
}

export const boardService = {
    create,
}