import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const connectPrisma = () => {
    try{
        prisma = new PrismaClient();
        return prisma
    } catch ( err ) {
        console.log(err);
    }
}

export default connectPrisma();