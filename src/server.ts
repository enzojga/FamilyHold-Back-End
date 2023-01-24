import express, { json } from 'express';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import boardRouter from './routers/boardRouter';
import userRouter from './routers/userRouter';

const server = express();
server.use(json());
server.use(userRouter);
server.use("/board", boardRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})