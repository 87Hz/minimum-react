import React from 'react'
import { Provider } from 'react-redux'
import { store } from '~/store'
import { Counter } from '~/components/Counter'

export const AppWithReduxStore = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
