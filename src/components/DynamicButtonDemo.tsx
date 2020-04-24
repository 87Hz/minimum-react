import React, { useContext } from 'react'
import { Button } from '~/components/Button'
import { ThemeContext, Themes } from '~/components/ThemeProvider'

export const DynamicButtonDemo = () => {
  const { theme } = useContext(ThemeContext)
  const fontSize = theme === Themes.Dark ? 50 : 20
  const borderColor = theme === Themes.Dark ? 'green' : 'red'

  return (
    <Button fontSize={fontSize} borderColor={borderColor}>
      FontSize Varies with theme
    </Button>
  )
}
