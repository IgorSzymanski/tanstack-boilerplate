/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/start'
import { hydrateRoot } from 'react-dom/client'

import { registerCookieStrategy } from './i18n/cookieStrategy.client'
import { createRouter } from './router'

const router = createRouter()

registerCookieStrategy()

hydrateRoot(document, <StartClient router={router} />, {})
