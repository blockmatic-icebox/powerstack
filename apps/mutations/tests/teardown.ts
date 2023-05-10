// tests/shutdown.ts

import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { prisma } from "./seed";
import { server } from "./setup";

export async function closeServer(server: FastifyInstance) {
  await server.close();
}

export async function closeDatabase(prisma: PrismaClient) {
  await prisma.$disconnect();
}


export default async function tearDown() {
  await closeServer(server);
  await closeDatabase(prisma);
}
