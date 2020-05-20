import { Config, IConfig } from 'overmind'
import { createHook } from 'overmind-react'
import { namespaced } from 'overmind/config'
import { counter } from '~/overmind/counter'

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<Config>()
export const config = namespaced({ counter })
