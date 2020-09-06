import React from 'react';
import { storiesOf } from '@storybook/react';

import theme, { AvailableColorsList } from '../src';

function keysOf<P>(obj: P) {
  return Object.keys(obj) as Array<keyof typeof obj>;
}

storiesOf('Theme', module).add('colors', () => (
  <div>
    {keysOf(theme.color).map((colorName: AvailableColorsList) => (
      <div
        key={colorName}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10rem',
          margin: '1rem',
          backgroundColor: theme.color[colorName],
        }}
      >
        {colorName}
      </div>
    ))}
  </div>
));
