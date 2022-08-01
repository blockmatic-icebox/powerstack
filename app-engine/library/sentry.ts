import * as Sentry from '@sentry/browser'
import type { Span, Transaction } from '@sentry/types'

export const CatchExceptionSentry = (error: Error) => {
  Sentry.captureException(error)
}

export const CatchMessageSentry = (message: string) => {
  Sentry.captureMessage(message)
}

export const SetSentryScopeTags = (tags: any) => {
  Object.keys(tags).forEach((key) => {
    Sentry.setTag(key, tags[key])
  })
}

export const CreateCustomTransaction = (name: string) => {
  const transaction = Sentry.startTransaction({ name })

  Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction))
  return transaction
}

export const CreateTransationSpan = (transaction: Transaction, spanAttr: any) => {
  const span = transaction.startChild({ ...spanAttr })
  return span
}

export const FinishInstrumentation = (transaction: Transaction, span: Span) => {
  transaction.finish()
  span.finish()
}

export const SetUserSentry = (userName: string) => {
  Sentry.setUser({ userName })
}
