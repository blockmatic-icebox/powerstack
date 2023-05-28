import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { PrismaClient, Prisma } from '@prisma/client'
import logger from '../utils/logger'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient // add prisma client to Fastify instance
  }
}

interface Options {
  prismaClient?: PrismaClient // optional PrismaClient instance
}

const prismaPlugin: FastifyPluginAsync<Options> = async (fastify, options = {}) => {
  const prisma = options.prismaClient || new PrismaClient() // instantiate a PrismaClient instance if not provided
  fastify.decorate('prisma', prisma) // add PrismaClient instance to Fastify instance

  // Add hooks for handling Prisma errors
  fastify.addHook('onError', async (request, reply, error) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // handle known Prisma errors
      reply.code(400).send({ error: 'Bad request' })
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      // handle unknown Prisma errors
      reply.code(500).send({ error: 'Internal server error' })
    }
    // handle other types of errors as needed
  })

  // Add a hook to gracefully shut down the PrismaClient instance on server shutdown
  fastify.addHook('onClose', async () => {
    await prisma.$disconnect()
  })

  // Add a route for health checks that tests the PrismaClient instance
  fastify.get('/prismaHealth', async (_request, reply) => {
    try {
      await prisma.$connect();
      await prisma.$queryRaw('SELECT 1;' as any);
      return { status: 'OK' };
    } catch (error: any) {
      logger.error(`Health check failed: ${error.message}`, error);
      reply.code(500).send({ status: 'ERROR', message: error.message });
    }
  });
}

export default fp(prismaPlugin, { name: 'prisma' })
