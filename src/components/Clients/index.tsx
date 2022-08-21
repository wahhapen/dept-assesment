import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { colors, mq, sizes } from "../../consts";

const clientsTitle = "Clients";
const clientsDesciption =
  "We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire  them to reach for the stars.";

// Static image plugin needs all parts in one place :(
const cdnUrl = "https://ucarecdn.com";

export const Clients: React.FC = () => {
  return (
    <ClientsWrapper>
      <ClientsHeading>{clientsTitle}</ClientsHeading>
      <ClientsText>{clientsDesciption}</ClientsText>
      <GridStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/739a0b1a-5827-456e-bd6d-61dce2f47c52/`}
            alt="Google"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/75967b60-5606-4b3b-b3cd-0448c63822e8/`}
            alt="Levi's"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/c289417c-4205-48ff-8c75-271cfca96c40/`}
            alt="Netflix"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/31e7dabb-fa6e-45b8-9714-43ec97ccb2b6/`}
            alt="Spotify"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/749760d2-8073-4ca1-a8ae-5387c113ca87/`}
            alt="Patagonia"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/de2977bc-3bc9-4380-8b26-0afc94ad4e3c/`}
            alt="Fujitsu"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/66daf505-e6c0-4b4c-91ba-bf02a95af72a/`}
            alt="Adyen"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/06b47bb2-18e3-4077-99c5-1a3771f24362/`}
            alt="Audi"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/78e9e297-3bd0-4c8e-9853-0c8fc99e9b06/`}
            alt="Triumph"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/cac097e0-a574-4ae1-9e7a-20d8a5dadea6/`}
            alt="Tesla"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/69a169c3-0a21-4d46-b0ef-a2ec5a521204/`}
            alt="ASOS"
          />
        </GridCellStyled>
        <GridCellStyled>
          <StaticImage
            loading="lazy"
            placeholder="blurred"
            src={`${cdnUrl}/29f7f92f-a8f1-4b3c-8b56-dcaad8ed74fb/`}
            alt="Takeaway"
          />
        </GridCellStyled>
      </GridStyled>
    </ClientsWrapper>
  );
};

const ClientsWrapper = styled.section`
  position: relative;
  ${mq({
    padding: [
      `${sizes.size30} ${sizes.size30}`,
      `${sizes.size30} ${sizes.size30}`,
      `${sizes.size30} ${sizes.size30}`,
      `${(sizes.size90, sizes.size20)}`,
    ],
  })}
`;
const GridStyled = styled.div`
  margin-top: ${sizes.size64};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  align-content: center;
  justify-items: space-between;
  width: 100%;
  justify-content: space-between;
  row-gap: ${sizes.size82};
  ${mq({
    columnGap: [`${sizes.size64}`, `${sizes.size128}`],
    justifyContent: ["space-around", "space-around", "space-between"],
    maxWidth: ["auto", `${sizes.size948}`],
    gridTemplateColumns: [
      `repeat(2, ${sizes.size114})`,
      `repeat(2, ${sizes.size114})`,
      `repeat(3, ${sizes.size150})`,
      `repeat(3, ${sizes.size172})`,
    ],
  })}
`;

const GridCellStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  ${mq({
    minWidth: [
      `${sizes.size114}`,
      `${sizes.size64}`,
      `${sizes.size150}`,
      `${sizes.size172}`,
    ],
  })}
`;

const ClientsText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: ${sizes.size18};
  color: ${colors.white};
`;
const ClientsHeading = styled.h4`
  font-size: ${sizes.size34};
`;
