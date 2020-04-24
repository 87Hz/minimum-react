import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import * as counter from '~/models/counter'

const epicMiddleware = createEpicMiddleware()

interface IRootState {
  counter: number
}

const store = configureStore<IRootState>({
  reducer: combineReducers({
    counter: counter.reducer,
  }),
  middleware: [epicMiddleware],
})

epicMiddleware.run(counter.epic)

export { store, IRootState }
