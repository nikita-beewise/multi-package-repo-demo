/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Button, { StyledButtonIcon, StyledButton } from '../src';

describe('button', () => {
  it('defined', () => {
    const wrapper = mount(<Button buttonType="primary" icon="x" />);
    expect(wrapper).toBeDefined();
  });
  it('renders', () => {
    const wrapper = mount(<Button buttonType="primary" icon="x" />);
    expect(wrapper.find(StyledButton)).toHaveLength(1);
  });
  it('icon renders', () => {
    const wrapper = mount(<Button buttonType="primary" icon="x" />);
    expect(wrapper.find(StyledButtonIcon)).toHaveLength(1);
  });
  it('renders without icon', () => {
    const wrapper = mount(<Button buttonType="primary" />);
    expect(wrapper.find(StyledButtonIcon)).toHaveLength(0);
  });
  it('renders with children', () => {
    const Child = () => <p>I am a child!</p>;
    const wrapper = mount(
      <Button buttonType="primary" icon="x">
        <Child />
      </Button>
    );
    expect(wrapper.find(Child)).toHaveLength(1);
  });
});
