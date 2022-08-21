import styled from "@emotion/styled";
import React, { useState } from "react";
import { mq, sizes } from "../../consts";
import { ClientCard } from "../ClientCard";
import { ClientNote } from "../ClientNote";
import { ClientQuote } from "../ClientQuote";
import { Filters } from "./partials/Filters";

import { categoryList, industryList, workCasesData } from "./data";

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

const notFoundText =
  "Sorry, these filters didn't work out, try selecting something different";

export const WorkList: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState(categoryList[0]);
  const [industryFilter, setIndustryFilter] = useState(industryList[0]);

  const filteredData = workCasesData.filter((work) => {
    if (
      categoryFilter !== categoryList[0] &&
      industryFilter !== industryList[0]
    ) {
      return categoryFilter === work.category &&
        industryFilter === work.industry
        ? work
        : null;
    }
    if (categoryFilter !== categoryList[0]) {
      return categoryFilter === work.category ? work : null;
    }
    if (industryFilter !== industryList[0]) {
      return industryFilter === work.industry ? work : null;
    }
    return work;
  });

  return (
    <section>
      <Filters
        setCategoryFilter={setCategoryFilter}
        setIndustryFilter={setIndustryFilter}
        categoryList={categoryList}
        industryList={industryList}
      />
      <WorksGrid>
        {!!filteredData.length ? (
          filteredData.map((work) => renderCase(work as Cases))
        ) : (
          <NotFoundText>{notFoundText}</NotFoundText>
        )}
      </WorksGrid>
    </section>
  );
};

const NotFoundText = styled.span`
  text-align: center;
  grid-column: span 4;
  font-size: ${sizes.size18};
  padding: ${sizes.size40};
`;
const WorksGrid = styled.div`
  flex-direction: column;
  grid-auto-flow: dense;
  ${mq({
    display: ["flex", "grid"],
  })}
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
