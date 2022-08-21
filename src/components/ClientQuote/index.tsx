import styled from "@emotion/styled";
import React from "react";
import { colors, mqSimple } from "../../consts";

export interface IProps {
  author: string;
  quote: string;
}

export const ClientQuote: React.FC<IProps> = ({ quote, author }) => {
  return (
    <ClientQuoteStyled>
      <Text>{quote}</Text>
      <Author>{author}</Author>
    </ClientQuoteStyled>
  );
};

const ClientQuoteStyled = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  gap: 32px;
  ${mqSimple({
    padding: ["92px 32px", " 91px 64px"],
  })}
`;

const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
  color: ${colors.white};
`;
const Author = styled.span`
  font-size: 18px;
  line-height: 18px;
  text-align: center;
`;
