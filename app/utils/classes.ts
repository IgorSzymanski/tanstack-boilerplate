import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge, mergeConfigs } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string =>
  extendTailwindMerge((config) =>
    mergeConfigs(config, {
      extend: {
        classGroups: {
          // object for new custom class groups
        },
      },
    }),
  )(inputs.map(clsx))
