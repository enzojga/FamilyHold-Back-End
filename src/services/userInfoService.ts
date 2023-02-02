import { userInfoRepositorie } from "../repositories/userInfoRepositorie";
import { unauthorizedError } from "../errors/errors"
import { messagesRepositorie } from "../repositories/messagesRepositorie";
import { verifyUserBoard } from "./helpers"

const upsert = async (board_id: number, user_id: number, picture: string, nickname: string, status: string) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    };
    const userInfo = await userInfoRepositorie.getUserInfo(board_id, user_id);
    const upsertInfo = userInfoRepositorie.upsert(board_id, user_id, picture, nickname, status, userInfo?.id);
    return upsertInfo;
}


export const userInfoService = {
    upsert,
}