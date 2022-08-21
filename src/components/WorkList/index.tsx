import styled from "@emotion/styled";
import React from "react";
import { colors, mq, mqSimple, sizes } from "../../consts";
import { ClientCard } from "../ClientCard";
import { ClientNote } from "../ClientNote";
import { ClientQuote } from "../ClientQuote";

import { workCasesData } from "./data";

interface ICase {
  industry: string;
  category: string;
}
interface ICardCase extends ICase {
  type: "card";
  company: string;
  description: string;
  urlTo: string;
  img?: string;
}
interface IInlineCardCase extends ICase {
  type: "inlineCard";
  company: string;
  description: string;
  urlTo: string;
  img?: string;
}

interface INoteCase extends ICase {
  type: "note";
  industry: string;
  category: string;
  isReversed: boolean;
  mainCard: ICardCase;
  textCards: ICardCase[];
}
interface IQuoteCase {
  author: string;
  quote: string;
  type: "quote";
}
type Cases = ICardCase | IQuoteCase | INoteCase | IInlineCardCase;

const renderCase = (work: Cases) => {
  switch (work.type) {
    case "card":
      return (
        <ClientCard
          urlTo={work.urlTo}
          key={work.img}
          company={work.company}
          title={work.description}
          img={`${process.env.GATSBY_CDN_HOST}${work.img}/-/format/auto/`}
        />
      );
    case "inlineCard":
      return (
        <ClientCard
          isInline
          urlTo={work.urlTo}
          key={work.description}
          company={work.company}
          title={work.description}
        />
      );
    case "note":
      return (
        <ClientNote
          key={work.mainCard.img}
          mainCard={work.mainCard}
          textCards={work.textCards}
          isReversed={work.isReversed}
        />
      );
    case "quote":
      return (
        <ClientQuote key={work.quote} author={work.author} quote={work.quote} />
      );
    default:
      return;
  }
};

export const WorkList: React.FC = () => {
  return (
    <section>
      {/* <Filters /> */}
      <WorksGrid>
        {workCasesData.map((work) => renderCase(work as Cases))}
      </WorksGrid>
    </section>
  );
};

const WorksGrid = styled.div`
  flex-direction: column;
  ${mq({
    display: ["flex", "grid"],
  })}
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
