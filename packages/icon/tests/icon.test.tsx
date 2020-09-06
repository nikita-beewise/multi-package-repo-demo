/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Icon from '../src';

describe('icon', () => {
  it('defined', () => {
    const wrapper = mount(<Icon type="x" />);
    expect(wrapper).toBeDefined();
  });
});
