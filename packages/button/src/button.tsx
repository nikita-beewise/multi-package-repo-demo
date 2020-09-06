import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';
import { ButtonProps } from './interface';

const Button = styled.button<ButtonProps>`
  ${({ buttonType = 'primary' }) => css`
    background-color: ${theme[buttonType].backgroundColor};
    color: ${theme[buttonType].color};

    &:disabled {
      cursor: default;
    }
  `}
  ${({ buttonType }) =>
    buttonType === 'primary' &&
    css`
      path {
        stroke: ${theme[buttonType].path.stroke};
      }

      &:disabled {
        background-color: ${theme[buttonType].disabled.backgroundColor};
      }
    `}
    ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      &:disabled {
        color: ${theme[buttonType].disabled.color};

        path {
          stroke: ${theme[buttonType].disabled.path.stroke};
        }
      }
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 500;
`;

export default Button;
