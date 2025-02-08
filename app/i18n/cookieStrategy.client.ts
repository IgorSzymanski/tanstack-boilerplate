import Cookies from 'js-cookie'

import { baseLocale, cookieName, defineGetLocale, extractLocaleFromCookie, isLocale, type Locale } from './index'

export const registerCookieStrategy = () => {
  const locale = extractLocaleFromCookie()
  defineGetLocale(() => (isLocale(locale) ? locale : baseLocale))
}

export const setLocaleCookie = (locale: Locale) => {
  Cookies.set(cookieName, locale)
}

export const switchLocale = (locale: Locale) => {
  setLocaleCookie(locale)
  globalThis.location.reload()
}
