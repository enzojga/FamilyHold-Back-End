import prisma from "../database/prismaDb"

const create = (userId: number, name: string) => {
    return prisma.boards.create({
        data: {
            owner: userId,
            name
        },
    });
};

export const boardRepositorie = {
    create,
}