import React from 'react'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from '~/overmind'
import { Counter } from '~/components/Counter'

const overmind = createOvermind(config)

export const AppWithOvermind = () => {
  return (
    <Provider value={overmind}>
      <Counter />
    </Provider>
  )
}
