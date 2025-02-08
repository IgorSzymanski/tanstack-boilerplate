/// <reference types="vinxi/types/server" />
import { getRouterManifest } from '@tanstack/start/router-manifest'
import { createStartHandler, defaultStreamHandler } from '@tanstack/start/server'

import { registerCookieStrategy } from './i18n/cookieStrategy.server'
import { localeStorage } from './i18n/localStorage'
import { createRouter } from './router'

export default createStartHandler({
  createRouter,
  getRouterManifest,
})((context) => registerCookieStrategy(localeStorage, context.request.headers, () => defaultStreamHandler(context)))
