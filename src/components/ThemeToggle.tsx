import React, { useContext } from 'react'
import { styled } from 'linaria/react'
import { ThemeContext, Themes } from '~/components/ThemeProvider'

export const ThemeToggle = () => {
  const { setTheme } = useContext(ThemeContext)

  const handleChange = (isDarkMode: boolean) => {
    setTheme(isDarkMode ? Themes.Dark : Themes.Light)
  }

  return (
    <Label>
      <input type='checkbox' onChange={(e) => handleChange(e.target.checked)} /> Enable DarkMode
    </Label>
  )
}

const Label = styled.label`
  display: block;
`
