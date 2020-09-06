import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '@nikita-beewise-test/icon';

export interface IButton {
  buttonType: string;
  icon?: string;
  children?: JSX.Element | string;
}

interface StyledButtonProps {
  buttonType: string;
}

const ButtonComponent: React.FC<IButton> = ({
  buttonType = 'primary',
  icon,
  children,
  ...rest
}): JSX.Element => (
  <StyledButton buttonType={buttonType} {...rest}>
    {icon && <StyledButtonIcon type={icon} />}
    {children}
  </StyledButton>
);

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  ${({ buttonType }) =>
    buttonType === 'primary' &&
    css`
      background-color: #0075ff;
      color: #fff;

      &[disabled] {
        background-color: #8d8d8d;

        path {
          stroke: #fff;
        }
      }
    `}
  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      background-color: #f7f7f7;
      color: #0075ff;

      &[disabled] {
        color: #8d8d8d;

        path {
          stroke: #8d8d8d;
        }
      }
    `}

  &[disabled] {
    cursor: default;
  }
`;

export const StyledButtonIcon = styled(Icon)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ButtonComponent;
