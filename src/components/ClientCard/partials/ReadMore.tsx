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

const ReadMoreStyled = styled.span`
  font-size: ${sizes.size16};
  gap: ${sizes.size12};
  z-index: 1;
  align-items: baseline;
  ${mqSimple({
    display: ["none", "flex"],
  })};
  &:hover {
    .fake-link-circle {
      stroke: ${colors.grey};
    }
    .fake-link-bullet {
      stroke: ${colors.grey};
      fill: ${colors.grey};
    }
  }
`;
