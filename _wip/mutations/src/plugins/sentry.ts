import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import * as Sentry from '@sentry/node'

const shutdownPlugin: FastifyPluginAsync = fp(async (server, options) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    enabled: !!process.env.SENTRY_DSN,
    integrations: [new Sentry.Integrations.Http({ tracing: true })],
    debug: !!process.env.SENTRY_DEBUG,
    tracesSampleRate: 1,
  })

  server.addHook('onError', (request, reply, error, done) => {
    Sentry.withScope((scope) => {
      scope.setTags({
        path: request?.raw.url ?? 'Not available',
      })
      scope.setExtras({
        'request ID': request?.id,
      })
      Sentry.captureException(error)
    })
  })
})

export default shutdownPlugin
