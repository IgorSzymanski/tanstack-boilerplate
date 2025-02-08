/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps, FunctionComponent } from 'react'

declare global {
  export type StaticImageData = string

  export { ComponentProps, ComponentRef, JSX, ReactNode } from 'react'

  export type NoInfer<T> = [T][T extends T ? 0 : never]

  export type AnyObject = Record<string, any>

  export type AnyArray = any[]

  export type AnyFunction = (...arguments_: any[]) => any

  export type EmptyObject = Record<string, never>

  export type EmptyArray = never[]

  export type Lazy<T> = () => T

  export type Prettify<T> = T extends AnyObject ? { [K in keyof T]: T[K] } : T

  export type Obligatory<T extends AnyObject, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>

  export type Optional<T extends AnyObject, Keys extends keyof T> = Partial<Pick<T, Keys>> & Omit<T, Keys>

  export type SvgComponent = FunctionComponent<
    ComponentProps<'svg'> & { title?: string; titleId?: string; desc?: string; descId?: string }
  >

  export type CamelCase<S extends string> = S extends `${infer L}-${infer R}`
    ? `${Lowercase<L>}${Capitalize<Lowercase<R>>}`
    : Lowercase<S>

  export type MaybeArray<T> = T | T[]

  export type MaybePromise<T> = T | Promise<T>

  export type OptionalRecord<Key extends string, Value> = {
    readonly [key in Key]?: Value
  }

  export type Primitive = string | number | boolean | null | undefined
}

declare module 'react' {
  // allow CSS custom properties
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined
  }

  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    transformOrigin?: string
  }
}
