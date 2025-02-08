import { AsyncLocalStorage } from 'node:async_hooks'

import { type Locale } from './index'

export const localeStorage = new AsyncLocalStorage<Locale>()
