import styled from "@emotion/styled";
import React from "react";
import { colors, mqSimple, sizes } from "../../consts";
import { ClientCard } from "../ClientCard";

interface ICardCase {
  company: string;
  description: string;
  urlTo: string;
  img?: string;
}

interface IProps {
  isReversed?: boolean;
  mainCard: ICardCase;
  textCards: ICardCase[];
}

export const ClientNote: React.FC<IProps> = ({
  isReversed,
  mainCard,
  textCards,
}) => {
  return (
    <ClientNoteStyled>
      <MainCardStyled isReversed={isReversed}>
        <ClientCard
          img={`${process.env.GATSBY_CDN_HOST}${mainCard.img}/`}
          company={mainCard.company}
          title={mainCard.description}
          urlTo={mainCard.urlTo}
        />
      </MainCardStyled>
      <TextCardsStackStyled isReversed={isReversed}>
        {textCards.map((textCard, idx) => (
          <ClientCard
            isInline
            key={textCard.company + idx}
            company={textCard.company}
            title={textCard.description}
            urlTo={textCard.urlTo}
          />
        ))}
      </TextCardsStackStyled>
    </ClientNoteStyled>
  );
};

interface INoteWrapperProps {
  isReversed?: boolean;
}

const MainCardStyled = styled.div<INoteWrapperProps>((props) => {
  const { isReversed } = props;
  const span = ["1", "1/3"];
  const spanReversed = ["1", "2/4"];

  return mqSimple({
    gridColumn: !isReversed ? span : spanReversed,
    position: "relative",
    transition: "all ease-in-out 0.5s",
    display: "flex",
  });
});

const TextCardsStackStyled = styled.div<INoteWrapperProps>((props) => {
  const { isReversed } = props;
  const span = ["1", "3/4"];
  const spanReversed = ["1", "1/2"];

  return mqSimple({
    gridColumn: !isReversed ? span : spanReversed,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    transition: "all ease-in-out 0.5s",
    padding: `${sizes.size50} ${sizes.size32}`,
  });
});

const ClientNoteStyled = styled.div`
  grid-column: span 4;
  display: grid;
  grid-auto-flow: dense;
  ${mqSimple({
    gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
    padding: ["0", "0"],
  })}

  ${TextCardsStackStyled} {
    a {
      &:not(:last-of-type) {
        border-bottom: 1px solid ${colors.grey};
      }
    }
  }
`;
