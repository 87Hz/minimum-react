import React from 'react'
import { useOvermind } from '~/overmind'

export const Counter = () => {
  const { state, actions } = useOvermind()

  return (
    <div>
      {state.counter.value}
      <button onClick={actions.counter.asyncRandom}>Async Random</button>
      <button onClick={() => actions.counter.inc(1)}>+</button>
      <button onClick={() => actions.counter.dec(1)}>-</button>
      <button onClick={() => actions.counter.inc(2)}>+2</button>
      <button onClick={() => actions.counter.dec(2)}>-2</button>
    </div>
  )
}
