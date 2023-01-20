import express, { json } from 'express';
import prisma from './database/prismaDb';
import redisClient from './database/redisDb';

const server = express();
server.use(json());

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})