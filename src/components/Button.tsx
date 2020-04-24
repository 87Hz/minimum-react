import { styled } from 'linaria/react'

export const Button = styled.button`
  color: var(--text-color);
  background-color: var(--color-primary);
  font-size: ${(props: any) => props.fontSize};
`
