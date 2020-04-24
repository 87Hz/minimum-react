import React, { useContext } from 'react'
import { Button } from '~/components/Button'
import { ThemeContext, Themes } from '~/components/ThemeProvider'

export const DynamicButtonDemo = () => {
  const { theme } = useContext(ThemeContext)
  const fontSize = theme === Themes.Dark ? 50 : 20
  return <Button fontSize={fontSize}>FontSize Varies with theme</Button>
}
