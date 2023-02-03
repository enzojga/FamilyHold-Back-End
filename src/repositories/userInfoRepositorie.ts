import prisma from "../database/prismaDb"

const getUserInfo = (board_id: number, user_id: number) => {
    return prisma.usersInfo.findFirst({
        where: {
            board_id,
            user_id
        }
    })
}

const upsert = (board_id: number, user_id: number, picture: string, nickname: string, status: string, id: number) => {
    return prisma.usersInfo.upsert({
        where: {
            id: id ? id : 0,
        },
        update: {
            picture,
            nickname,
            status,
        },
        create: {
            board_id,
            user_id,
            picture,
            nickname,
            status
        }
    })
}

const getManyUserInfo = (board_id: number) => {
    return prisma.usersInfo.findMany({
        where: {
            board_id,
        },
        include: {
            Users: {
                select: {
                    username: true,
                }
            },
        }
    })
}

export const userInfoRepositorie = {
    getUserInfo,
    upsert,
    getManyUserInfo
};
