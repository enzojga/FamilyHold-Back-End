import { taskRepositorie } from "../repositories/taskRepositorie";
import { notFoundError, unauthorizedError } from "../errors/errors"
import { verifyUserBoard } from "./helpers"

const createTask = async (user_id: number, board_id: number, name: string) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }

    await taskRepositorie.createTask(user_id, board_id, name);

    return;
}

const getTasks = async (user_id: number, board_id: number) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }
    const tasks = await taskRepositorie.findTasks(board_id);
    return tasks;
}

const joinTask = async (user_id: number, task_id: number) => {
    const task = await taskRepositorie.findTask(task_id);

    if(!task) {
        throw notFoundError();
    }

    if(await verifyUserBoard(user_id, task.board_id)){
        throw unauthorizedError();
    }

    await taskRepositorie.joinTask(user_id, task_id);
    return;
}

export const taskService = {
    createTask,
    getTasks,
    joinTask
}