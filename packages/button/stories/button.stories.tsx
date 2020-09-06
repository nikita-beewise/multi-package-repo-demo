import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button, IconButton, ButtonProps, ButtonTypes, IconButtonProps } from '../src';

const buttonTypes: Array<ButtonTypes> = ['primary', 'secondary'];

storiesOf('Button', module)
  .add('with text', () => {
    const props: ButtonProps = {
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('Button type', buttonTypes, buttonTypes[0]),
    };

    return <Button {...props}>{text('Text', 'I am a Button')}</Button>;
  })
  .add('with icon', () => {
    const props: IconButtonProps = {
      onClick: action('IconButton click'),
      disabled: boolean('Disabled', false),
      buttonType: select('Button type', buttonTypes, buttonTypes[0]),
      iconName: text('Icon name', 'camera'),
    };

    return <IconButton {...props}>{text('Text', 'I am a IconButton')}</IconButton>;
  });
