/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import theme from '../src/theme';
import { Button, IconButton, ButtonProps, IconButtonProps } from '../src';

describe('button', () => {
  const buttonProps: ButtonProps = {
    buttonType: 'primary',
  };

  it('button defined', () => {
    const wrapper = mount(<Button {...buttonProps} />);
    expect(wrapper).toBeDefined();
  });
  it('renders', () => {
    const wrapper = mount(<Button {...buttonProps} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('children render', () => {
    const wrapper = mount(<Button {...buttonProps}>I am a child!</Button>);
    expect(wrapper.find('button').text()).toEqual('I am a child!');
  });
  it('can be disabled', () => {
    const wrapper = mount(<Button {...buttonProps} disabled />);
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });
  it('secondary button correct style', () => {
    const wrapper = mount(<Button buttonType="secondary" />);
    expect(wrapper.find('button')).toHaveStyleRule(
      'background-color',
      theme.secondary.backgroundColor
    );
  });
  it('default style when button type is not specified', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('button')).toHaveStyleRule(
      'background-color',
      theme.primary.backgroundColor
    );
  });
});

describe('icon button', () => {
  const iconButtonProps: IconButtonProps = {
    buttonType: 'primary',
    iconName: 'camera',
  };

  it('icon button defined', () => {
    const wrapper = mount(<IconButton {...iconButtonProps} />);
    expect(wrapper).toBeDefined();
  });
  it('button renders', () => {
    const wrapper = mount(<IconButton {...iconButtonProps} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
