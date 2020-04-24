import { css } from 'linaria'
import { join, pipe, map } from 'ramda'

export type ThemeCssVars = {
  ['--color-primary']: string
  ['--text-color']: string
}

export const lightModeCssVars: ThemeCssVars = {
  ['--color-primary']: 'white',
  ['--text-color']: 'black',
}

export const darkModeCssVars: ThemeCssVars = {
  ['--color-primary']: 'black',
  ['--text-color']: 'white',
}

const toCss: (cssVars: ThemeCssVars) => string = pipe(Object.entries, map(join(':')), join(';'))

export const lightModeClassName = css`
  ${toCss(lightModeCssVars)}
`

export const darkModeClassName = css`
  ${toCss(darkModeCssVars)}
`
