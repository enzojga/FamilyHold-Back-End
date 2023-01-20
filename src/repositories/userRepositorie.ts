import prisma from "../database/prismaDb"

const createUser = (username: string, password: string) => {
    return prisma.users.create({
        data: {
            username,
            password
        },
    });
};

const findUserByUsername = (username: string) => {
    return prisma.users.findFirst({
        where: {
            username,
        },
    });
};

export const userRepositorie = {
    createUser,
    findUserByUsername
};