import { createReducer, createAction } from '@reduxjs/toolkit'
import { ofType, Epic, combineEpics } from 'redux-observable'
import { delay, mapTo } from 'rxjs/operators'
import { IRootState } from '~/store'

export const actions = {
  inc: createAction('INC'),
  dec: createAction('DEC'),
}

export const reducer = createReducer<number>(0, {
  [actions.inc.type]: (state) => state + 1,
  [actions.dec.type]: (state) => state - 1,
})

export const selectors = {
  root: (state: IRootState) => state.counter,
}

export const incEpic: Epic = (action$) => action$.pipe(ofType(actions.inc.type), delay(1000), mapTo(actions.dec()))

export const epic = combineEpics(incEpic)
