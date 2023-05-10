import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import logger from '../utils/logger';

interface ShutdownPluginOptions {
  signal?: string;
  healthChecks?: {
    [path: string]: () => Promise<void | { [key: string]: any }> | void | { [key: string]: any };
  };
  timeout?: number;
  logger?: typeof logger;
}

export default fp(async (server: FastifyInstance, opts: ShutdownPluginOptions) => {

  server.get('/server', async (_request, reply) => {
    if (server.server.listening) {
      reply.send({ status: 'OK' });
    } else {
      reply.status(500).send({ status: 'Server is not listening' });
    }
  });

  server.get('/database', async (_request, reply) => {
    try {
      await server.prisma.$connect();
      await server.prisma.$queryRaw('SELECT 1' as any);
      reply.send({ status: 'OK' });
    } catch (err: any) {
      reply.status(500).send({ status: `Database is not healthy: ${err.message}` });
    } finally {
      await server.prisma.$disconnect();
    }
  });

  const handleShutdown = async (signal: NodeJS.Signals) => {
    logger.info(`Received ${signal}, shutting down...`);

    try {
      // Close any open WebSocket connections, message queue connections, etc. here.

      await server.prisma.$disconnect();
      logger.info('Database connection closed successfully');

      await server.close();
      logger.info('HTTP server closed successfully');
    } catch (error) {
      logger.error(`Error closing server: ${error}`, error);
      process.exit(1);
    }

    logger.info('Server shutdown complete.');
    process.exit(0);
  };

  process.on('SIGINT', handleShutdown);
  process.on('SIGTERM', handleShutdown);

  process.on('uncaughtException', (err: any) => {
    logger.error(`Uncaught exception: ${err.stack}`);
    process.exit(1);
  });

  process.on('unhandledRejection', (err: any) => {
    logger.error(`Unhandled rejection: ${err.stack}`);
    process.exit(1);
  });
});
