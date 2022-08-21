import styled from "@emotion/styled";
import React from "react";
import { colors, mqSimple, sizes } from "../../consts";
import { ReadMore } from "./partials/ReadMore";

export interface IProps {
  company: string;
  title: string;
  urlTo: string;
  img?: string;
  isInline?: boolean;
}

export const ClientCard: React.FC<IProps> = ({
  title,
  company,
  img,
  urlTo,
  isInline,
}) => {
  return !isInline ? (
    <ClientCardStyled href={urlTo} style={{ backgroundImage: ` url(${img})` }}>
      <CompanyStyled>{company}</CompanyStyled>
      <Text>{title}</Text>
      <ReadMore />
    </ClientCardStyled>
  ) : (
    <InlineClientCardStyled href={urlTo}>
      <CompanyStyled>{company}</CompanyStyled>
      <Text>{title}</Text>
      <ReadMore />
    </InlineClientCardStyled>
  );
};

const ClientCardStyled = styled.a`
  position: relative;
  grid-column: span 2;
  width: 100%;
  ${mqSimple({
    minHeight: [`${sizes.size400}`, `${sizes.size560}`],
  })};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${sizes.size16};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  text-decoration: none;
  transition: all ease-in-out 0.25s;
  ${mqSimple({
    padding: [
      `${sizes.size24} ${sizes.size32}`,
      `${sizes.size24} ${sizes.size64}`,
    ],
  })};
  &:hover {
    &:after {
      transition: all ease-in-out 0.25s;
      transform: translateY(0);
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: ${sizes.size160};
    background: rgb(51 51 51 / 50%);
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    transform: translateY(${sizes.size160});
    transition: all ease-in-out 0.5s;
  }
`;

const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: ${sizes.size26};
  line-height: ${sizes.size26};
  color: ${colors.white};
  z-index: 1;
  transition: all 0.2s ease-in-out;
`;
const CompanyStyled = styled.span`
  font-size: ${sizes.size16};
  line-height: ${sizes.size16};
  z-index: 1;
  transition: all 0.2s ease-in-out;
`;

const InlineClientCardStyled = styled.a`
  padding-top: ${sizes.size32};
  padding-bottom: ${sizes.size36};
  grid-column: span 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${colors.white};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${CompanyStyled} {
      color: ${colors.grey};
      transition: all 0.2s ease-in-out;
    }
    ${Text} {
      background: url(https://ucarecdn.com/b406c5cf-a365-41ca-b91e-6c7e38fe8392/);

      background-size: cover;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.2s ease-in-out;
    }
  }

  ${Text} {
    font-size: ${sizes.size16};
    line-height: ${sizes.size18};
  }
`;
