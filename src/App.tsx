import React from 'react'
import { Button } from '~/components/Button'
import { ThemeProvider } from '~/components/ThemeProvider'
import { ThemeToggle } from '~/components/ThemeToggle'
import { ThemeReader } from '~/components/ThemeReader'

export const App = () => {
  return (
    <ThemeProvider>
      <p>Hello</p>
      <Button>Btn</Button>
      <ThemeToggle />
      <ThemeReader />
    </ThemeProvider>
  )
}
