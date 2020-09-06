/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Icon, { StyledReactSvg } from '../src';

describe('icon', () => {
  it('defined', () => {
    const wrapper = mount(<Icon type="x" />);
    expect(wrapper).toBeDefined();
  });
  it('renders', () => {
    const wrapper = mount(<Icon type="x" />);
    expect(wrapper.find(StyledReactSvg)).toHaveLength(1);
  });
});
