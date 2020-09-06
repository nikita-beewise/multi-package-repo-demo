---
to: packages/<%= name %>/src/<%= name %>.tsx
---
import React from 'react';
import styled from 'styled-components';

export interface <%= h.changeCase.pascalCase(name) %>Props {
  className?: string;
  text?: string;
}

const <%= h.changeCase.pascalCase(name) %>Component: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ className, text }) => (
  <div className={className}> {text} </div>
);

const <%= h.changeCase.pascalCase(name) %> = styled(<%= h.changeCase.pascalCase(name) %>Component)`
`;

export default <%= h.changeCase.pascalCase(name) %>;
