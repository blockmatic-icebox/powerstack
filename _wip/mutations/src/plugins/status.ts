import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import logger from '../utils/logger';

export const statusPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  // Define the health check function(s)
  fastify.get('/health', async (_request, reply) => {
    // Perform any necessary health checks
    // Return 'true' if everything is healthy, otherwise an error object or 'false'
    reply.send({ status: 'OK' });
  });

  // Handle server shutdown gracefully
  const handleShutdown = async (signal: NodeJS.Signals) => {
    logger.info(`Received ${signal}, shutting down...`);
    await fastify.close();
    process.exit(0);
  };

  process.on('SIGINT', handleShutdown);
  process.on('SIGTERM', handleShutdown);

  fastify.addHook('onClose', async (instance) => {
    // Perform any additional cleanup actions here
  });
};
