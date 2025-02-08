import { createFileRoute } from '@tanstack/react-router'

import { type Locale, locales, tt } from '~/i18n'
import { switchLocale } from '~/i18n/cookieStrategy.client'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>{tt.hello({ name: 'John Doe' })}</h3>
      <ul className={'flex flex-row gap-2'}>
        {locales.map((locale) => (
          <li key={locale}>
            <button
              onClick={() => switchLocale(locale)}
              className={'rounded-sm bg-cyan-600 px-2 py-1 text-sm font-black text-white'}
            >
              {locale}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              switchLocale('pl-PL' as Locale)
              alert("This locale isn't supported. Fallback to en-US.")
            }}
            className={'rounded-sm bg-red-400 px-2 py-1 text-sm font-black text-white'}
          >
            {'pl-PL'}
          </button>
        </li>
      </ul>
    </div>
  )
}
