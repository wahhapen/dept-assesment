import React from "react";
import { useTrail, a } from "@react-spring/web";

import styled from "@emotion/styled";

export const MenuTrail: React.FC<{
  open: boolean;
  children: React.ReactNode;
}> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 2, tension: 2000, friction: 100 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 60 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <Wrapper>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trails-text" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
`;
