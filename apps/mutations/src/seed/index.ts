import { PrismaClient } from '@prisma/client';
import { TaskRolesSeed } from './taskRolesSeed';
import logger from '../utils/logger';

const prisma = new PrismaClient();

async function main() {
    const taskRolesSeed = Object.values(TaskRolesSeed);

    for (const taskRole of taskRolesSeed) {
        await prisma.taskRole.upsert({
            where: { role: taskRole },
            update: {},
            create: {
                role: taskRole,
            },
        });
    }
}

main()
    .catch((e) => {
        logger.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
