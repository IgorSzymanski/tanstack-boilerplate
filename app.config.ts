import path from 'node:path'
const { join } = path

import { paraglideVitePlugin as paraglide } from '@inlang/paraglide-js'
import { defineConfig } from '@tanstack/start/config'
import { type App } from 'vinxi'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

const config = {
  appDirectory: 'app',
  autoOpenBrowser: false,
}

const app: App = {
  ...defineConfig({
    react: {
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              target: '19',
            },
          ],
        ],
      },
    },
    vite: {
      plugins: [
        svgr(),
        imagetools({
          cache: {},
        }),
        paraglide({
          project: './project.inlang',
          outdir: './app/paraglide',
          outputStructure: 'locale-modules',
          cookieName: 'locale',
        }),
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    },
  }),
}

function withGlobalMiddleware(application: App): App {
  return {
    ...application,
    config: {
      ...application.config,
      routers: application.config.routers.map((router) => ({
        ...router,
        middleware: router.target === 'server' ? join(config.appDirectory, 'utils/globalMiddleware.ts') : undefined,
      })),
    },
  }
}

export default withGlobalMiddleware(app)
