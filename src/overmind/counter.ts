import { Action, AsyncAction } from 'overmind'

const state = {
  value: 0,
}

const mockApi = () => new Promise<number>((resolve) => setTimeout(() => resolve(Math.random()), 2000)).then((i) => i)

const inc: Action<number, number> = ({ state }, val) => (state.counter.value += val)

const dec: Action<number, number> = ({ state }, val) => (state.counter.value -= val)

const asyncRandom: AsyncAction = async ({ state, effects }) => {
  state.counter.value = await effects.counter.mockApi()
}

export const counter = {
  state,
  actions: { inc, dec, asyncRandom },
  effects: { mockApi },
}
