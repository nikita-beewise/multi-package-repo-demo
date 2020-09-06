import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Button, { IButton } from '../src';

storiesOf('Button', module)
  .add('Default', () => {
    const buttonTypes = {
      primary: 'primary',
      secondary: 'secondary',
    };
    const props: IButton = {
      buttonType: select('Type of button', buttonTypes, 'secondary'),
      icon: text('Icon name', 'x'),
    };

    return <Button {...props} />;
  })
  .add('With children', () => {
    const buttonTypes = {
      primary: 'primary',
      secondary: 'secondary',
    };
    const props: IButton = {
      buttonType: select('Type of button', buttonTypes, 'secondary'),
      icon: text('Icon name', 'x'),
    };

    return (
      <Button {...props}>
        <input type="text" value="I am a child!" />
      </Button>
    );
  });
