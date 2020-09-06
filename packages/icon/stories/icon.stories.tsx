import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Icon, { IconProps } from '../src';

storiesOf('Icon', module).add('Default', () => {
  const props: IconProps = {
    type: text('icon type', 'x'),
  };

  return <Icon {...props} />;
});
