import { boardRepositorie } from "../repositories/boardRepositorie";

const create = async (userId: number, name: string) => {
    console.log(userId, name);
    const board = await boardRepositorie.create(userId, name);
    return board;
}

export const boardService = {
    create,
}