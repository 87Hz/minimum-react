import { styled } from 'linaria/react'
import { prop } from 'ramda'

export const Button = styled.button`
  --border-color: ${prop<any, any>('borderColor')};

  color: var(--text-color);
  background-color: var(--color-primary);

  border-color: var(--border-color);
  font-size: ${prop<any, any>('fontSize')};
`
