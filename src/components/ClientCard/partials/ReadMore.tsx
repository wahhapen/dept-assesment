import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ReadMoreIcon } from "../../../assets";
import { colors, mqSimple, sizes } from "../../../consts";

const linkText = "Read more";

export const ReadMore: React.FC = () => (
  <ReadMoreStyled>
    <ReadMoreIcon />
    {linkText}
  </ReadMoreStyled>
);

const circleOpacity = keyframes`
  0% {
      opacity: 0
  }

  to {
    opacity: 1
  }
`;
const bulletOpacity = keyframes`
  0% {
      opacity: 1
  }

  to {
    opacity: 0
  }
`;

const ReadMoreStyled = styled.span`
  font-size: ${sizes.size16};
  gap: ${sizes.size12};
  z-index: 1;
  align-items: baseline;
  ${mqSimple({
    display: ["none", "flex"],
  })};
  a:hover > & {
    .fake-link-circle {
      stroke: ${colors.white};
      fill: ${colors.white};
      animation: ${circleOpacity} 0.25s ease-in-out 0s 1 forwards;
    }
    .fake-link-bullet {
      stroke: ${colors.white};
      fill: ${colors.white};
      animation: ${bulletOpacity} 0.5s ease-in-out 0s 1 forwards;
    }
  }
`;
