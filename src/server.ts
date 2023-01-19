import express, { json } from 'express';

const server = express();
server.use(express.json());

server.listen(5000, () => {
    console.log("Ola munsds")
})