import styled from "@emotion/styled";

import React from "react";
import { colors, mqSimple, sizes } from "../../consts";

const heroContent = {
  pageTitle: "Work",
  text: "A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands stay ahead.",
};
export const Hero = () => {
  return (
    <HeroSectionStyled>
      <HeroPageTitle>{heroContent.pageTitle}</HeroPageTitle>
      <HeadingStyled dangerouslySetInnerHTML={{ __html: heroContent.text }} />
    </HeroSectionStyled>
  );
};

const HeroSectionStyled = styled.section`
  display: flex;
  gap: ${sizes.size32};
  background-image: url("https://ucarecdn.com/6da574ff-d1ea-476e-9e54-ab1d7d56cf62/");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  flex-direction: column;
  justify-content: flex-end;

  ${mqSimple({
    minHeight: [`${sizes.size400}`, `calc(100vh - ${sizes.size200})`],
    padding: [
      `${sizes.size22} ${sizes.size16}`,
      ` ${sizes.size54} ${sizes.size82}`,
    ],
  })}
`;

const HeadingStyled = styled.h1`
  margin: 0;
  max-width: ${sizes.size560};
  font-weight: 400;
  font-size: ${sizes.size34};
  line-height: ${sizes.size34};
  color: ${colors.white};
  strong {
    font-weight: 600;
  }
`;
const HeroPageTitle = styled.span`
  font-size: ${sizes.size16};
  line-height: ${sizes.size16};
`;
