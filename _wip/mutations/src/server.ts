import fastify, {
  FastifyInstance,
  FastifyListenOptions,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from 'fastify'
import { tracingIgnoreRoutes } from './constants'
import mercurius from 'mercurius'
import { schema } from './schema'
import AltairFastify, { AltairFastifyPluginOptions } from 'altair-fastify-plugin'
import shutdownPlugin from './plugins/shutdown'
import prismaPlugin from './plugins/prisma'
import { Context } from './context'
import { statusPlugin } from './plugins/status'
import { makeListenOptions as createListenOptions, createAltairConfigurations, createMercuriusOptions, createFastifyServerOptions, generateSwaggerOptions } from './serverOptions'
import fastifyPassport from '@fastify/passport';
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import fastifyFormBody from '@fastify/formbody';
import fastifySwagger from '@fastify/swagger'
import logger from './utils/logger'

export function createServer(opts: FastifyServerOptions = {}): FastifyInstance {
  const server = fastify(opts)
  // Register cookie and session plugins
  server.register(fastifyCookie);
  server.register(fastifySession, {
    secret: process.env.SESSION_SECRET || 'fallback-session-secrefallback-session-secrefallback-session-secret', // Use the environment variable or a fallback secret
    cookie: { secure: !!process.env.USE_HTTPS || false }, // Set to true if using HTTPS
    saveUninitialized: false,
    cookieName: 'sessionId',
  });



  server.register(fastifySwagger, generateSwaggerOptions(server));

  server.register(fastifyFormBody);
  server.register(fastifyPassport.initialize());
  server.register(fastifyPassport.secureSession());


  // Routes
  server.post(
    '/login',
    { preValidation: fastifyPassport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login' }) },
    async (request, reply) => { },
  );
  // Register plugins
  server.register(shutdownPlugin) // Register the plugin for graceful shutdown
  server.register(statusPlugin) // Register the plugin for serving status pages
  server.register(prismaPlugin) // Register the Prisma plugin for database access


  // Register the Mercurius plugin for GraphQL API
  server.register(mercurius, createMercuriusOptions(server));

  // Register the AltairFastify plugin for GraphQL development tool
  server.register(AltairFastify, createAltairConfigurations())

  return server // Return the server instance
}


export async function startServer() {
  const server = createServer(createFastifyServerOptions())
  logger.info(`PrismifyQL server is warming up`)


  try {
    const listenOptions: FastifyListenOptions = createListenOptions(server)

    server.listen(listenOptions, (err, address) => {
      if (err) {
        logger.info(`server is shutting down`)
        logger.error(err)
        process.exit(1)
      }
      logger.info(`PrismifyQL server is ready 🚀 `)
    })
    server.ready((err: Error) => {
      if (err) {
        logger.info(`server is shutting down`)
        logger.error(err)
        process.exit(1)
      }
    })
  }
  catch (err) {
    logger.info(`server is shutting down`)
    logger.error(err)
    process.exit(1)
  }
}
