import Joi from "joi";

export const boardSchema = Joi.object({
    name: Joi.string().max(15).required(),
})