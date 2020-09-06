import React from 'react';
import styled from 'styled-components';
import { IconButtonProps } from './interface';
import Button from './button';
import Icon from '@nikita-beewise-test/icon';

const IconButton: React.FC<IconButtonProps> = ({ iconName, children, ...props }): JSX.Element => (
  <Button {...props}>
    {!!iconName && <StyledIcon type={iconName} />}
    {children}
  </Button>
);

const StyledIcon = styled(Icon)`
  margin-right: 8px;
`;

export default IconButton;
