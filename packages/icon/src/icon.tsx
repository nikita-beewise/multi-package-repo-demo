import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export interface IconProps {
  type: string;
  className?: string;
}

const IconComponent: React.FC<IconProps> = ({ type, className, ...rest }): JSX.Element | null => {
  const latestType = useRef<{ type?: string | null }>({ type: null });
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // useRef added to avoid race conditions on dynamic import (to achieve latest passed type to be rendered)
    latestType.current.type = type;
    import(`../images/${type}.svg`).then((image) => {
      if (image.default.includes(latestType.current.type)) {
        setImage(image.default);
      }
    });
  }, [type]);

  return !!image ? <StyledReactSvg className={className} src={image} {...rest} /> : null;
};

export const StyledReactSvg = styled(ReactSVG)`
  path {
    stroke: #0075ff;
  }
`;

export default IconComponent;
