/* eslint-disable no-console */
import { createMiddleware } from '@tanstack/start'

export const logMiddleware = createMiddleware()
  .client(async (context) => {
    const clientTime = new Date()

    return context.next({
      context: {
        clientTime,
      },
      sendContext: {
        clientTime,
      },
    })
  })
  .server(async (context) => {
    const serverTime = new Date()

    return context.next({
      sendContext: {
        serverTime,
        durationToServer: serverTime.getTime() - context.context.clientTime.getTime(),
      },
    })
  })
  .clientAfter(async (context) => {
    const now = new Date()

    console.log('Client Req/Res:', {
      duration: context.context.clientTime.getTime() - now.getTime(),
      durationToServer: context.context.durationToServer,
      durationFromServer: now.getTime() - context.context.serverTime.getTime(),
    })

    return context.next()
  })
