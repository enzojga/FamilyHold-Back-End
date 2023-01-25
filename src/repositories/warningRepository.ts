import prisma from "../database/prismaDb"

const create = (creator: number, board_id: number, text: string) => {
    return prisma.warnings.create({
        data: {
            creator,
            board_id,
            text
        }
    });
};

export const warningRepositorie = {
    create,
}