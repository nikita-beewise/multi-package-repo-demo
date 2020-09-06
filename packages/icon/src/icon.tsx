import React, { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

export interface IconProps {
  iconName: string;
}

const IconComponent: React.FC<IconProps> = ({ iconName, ...rest }): JSX.Element | null => {
  const latestType = useRef<{ iconName?: string | null }>({ iconName: null });
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // useRef added to avoid race conditions on dynamic import (to achieve latest passed type to be rendered)
    latestType.current.iconName = iconName;
    import(`../images/${iconName}.svg`).then((image) => {
      if (image.default.includes(latestType.current.iconName)) {
        setImage(image.default);
      }
    });
  }, [iconName]);

  return !!image ? <ReactSVG src={image} {...rest} /> : null;
};

export default IconComponent;
