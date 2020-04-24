import React from 'react'
import { Button } from '~/components/Button'
import { ThemeProvider } from '~/components/ThemeProvider'
import { ThemeToggle } from '~/components/ThemeToggle'
import { ThemeReader } from '~/components/ThemeReader'
import { RestyledButton } from '~/components/RestyledButton'

export const App = () => {
  return (
    <ThemeProvider>
      <p>Hello</p>
      <Button>Btn</Button>
      <RestyledButton>RestyledBtn</RestyledButton>
      <ThemeToggle />
      <ThemeReader />
    </ThemeProvider>
  )
}
