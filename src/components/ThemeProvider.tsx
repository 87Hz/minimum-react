import React, { createContext, useState, FC } from 'react'
import { __, propOr } from 'ramda'
import { darkModeClassName, lightModeClassName, darkModeCssVars, lightModeCssVars, ThemeCssVars } from '~/themes'

export enum Themes {
  Default = 'Default',
  Light = 'Light',
  Dark = 'Dark',
}

const getThemeClassName: (theme: Themes) => string = propOr(lightModeClassName, __, {
  [Themes.Light]: lightModeClassName,
  [Themes.Dark]: darkModeClassName,
})

const getThemeCssVars: (theme: Themes) => ThemeCssVars = propOr(lightModeCssVars, __, {
  [Themes.Light]: lightModeCssVars,
  [Themes.Dark]: darkModeCssVars,
})

export type ThemeContextValue = {
  theme: Themes
  setTheme: (theme: Themes) => void
  themeCssVars: ThemeCssVars
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: Themes.Default,
  setTheme: () => {},
  themeCssVars: getThemeCssVars(Themes.Default),
})

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(Themes.Default)

  const themeClassName = getThemeClassName(theme)
  const themeCssVars = getThemeCssVars(theme)

  const themeContextValue: ThemeContextValue = {
    theme,
    setTheme,
    themeCssVars,
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={themeClassName}>{children}</div>
    </ThemeContext.Provider>
  )
}
