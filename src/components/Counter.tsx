import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as counter from '~/models/counter'
import { Button } from '~/components/Button'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterVal = useSelector(counter.selectors.root)

  const onInc = () => dispatch(counter.actions.inc())
  const onDec = () => dispatch(counter.actions.dec())

  return (
    <div>
      {counterVal}
      <Button onClick={onInc}>+</Button>
      <Button onClick={onDec}>-</Button>
    </div>
  )
}
