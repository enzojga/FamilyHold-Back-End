import prisma from "../database/prismaDb"

const createTask = (user_id: number, board_id: number, name: string) => {
    return prisma.tasks.create({
        data: {
            creator: user_id,
            board_id,
            name
        }
    })
};

const findTasks = (board_id: number) => {
    return prisma.tasks.findMany({
        where: {
            board_id,
        },
        include: {
            TaskCategories: {
                select: {
                    Categories: true
                },
            },
            UserTask: {
                select: {
                    Users: {
                        include: {
                            UsersInfo: true,
                        }
                    }
                }
            }
        }
    });
};

const findTask = (task_id: number) => {
    return prisma.tasks.findFirst({
        where: {
            id: task_id,
        }
    })
}

const joinTask = (user_id:number, task_id: number) => {
    return prisma.userTask.create({
        data: {
            user_id,
            task_id
        }
    })
}

export const taskRepositorie = {
    createTask,
    findTasks,
    findTask,
    joinTask
}