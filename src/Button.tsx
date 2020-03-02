import React from 'react';
import { css } from 'linaria';

const buttonStyle = css`
  color: blue;
`;

export const Button = (props: any) => {
  return <button className={buttonStyle} {...props} />;
};
