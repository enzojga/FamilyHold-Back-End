import { conflictError } from "../errors/errors";
import { userRepositorie } from "../repositories/userRepositorie"
import bcrypt from "bcrypt";

const createUser = async (username: string, password: string) => {
    const user = await userRepositorie.findUserByUsername(username);

    if(user) {
        throw conflictError("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await userRepositorie.createUser(username, hashedPassword);
    return;
}

export const userService = {
    createUser,
}