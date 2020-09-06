import React from 'react';

export const AvailableButtonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

export type ButtonTypes = keyof typeof AvailableButtonTypes;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonTypes;
};

export type IconButtonProps = ButtonProps & {
  iconName: string;
};
