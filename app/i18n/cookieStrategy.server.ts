import { type AsyncLocalStorage } from 'node:async_hooks'

import { resolveAcceptLanguage } from 'resolve-accept-language'
import { getCookie, setCookie } from 'vinxi/http'

import { baseLocale, cookieName, defineGetLocale, isLocale, type Locale, locales } from './index'

export const registerCookieStrategy = <R>(storage: AsyncLocalStorage<Locale>, headers: Headers, callback: () => R) => {
  const acceptLanguage = headers.get('accept-language')
  let lang: Locale

  const cookieLang = getCookie(cookieName)

  if (!cookieLang || !isLocale(cookieLang)) {
    lang = resolveAcceptLanguage(acceptLanguage ?? '', locales, baseLocale)
    setCookie(cookieName, lang)
  } else {
    lang = cookieLang
  }

  defineGetLocale(() => storage.getStore() ?? baseLocale)

  return storage.run(lang, callback)
}
