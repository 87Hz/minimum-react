import React, { useContext } from 'react'
import { ThemeContext } from '~/components/ThemeProvider'

export const ThemeReader = () => {
  const { theme, themeCssVars } = useContext(ThemeContext)

  return (
    <div>
      <h4>{theme}</h4>
      <pre>{JSON.stringify(themeCssVars, undefined, 2)}</pre>
    </div>
  )
}
