import styled from "@emotion/styled";
import React from "react";
import { ActiveArrow } from "../../../assets";
import { colors, mqSimple, sizes } from "../../../consts";

const landLinks = [
  { title: "Global", url: "/" },
  { title: "Nederland", url: "/", active: true },
  { title: "United States", url: "/" },
  { title: "Ireland", url: "/" },
  { title: "United Kingdom", url: "/" },
  { title: "Deutschland", url: "/" },
  { title: "Schweitz", url: "/" },
];

const subMenuTitle = "Landen";

export const LangMenu = () => {
  return (
    <SubMenu>
      <SubMenuTitle>{subMenuTitle}</SubMenuTitle>
      <SubMenuList>
        {landLinks.map((link) => (
          <SubMenuItem key={link.title}>
            {link.active && <ActiveArrow />}
            <a href={link.url}>{link.title}</a>
          </SubMenuItem>
        ))}
      </SubMenuList>
    </SubMenu>
  );
};

const SubMenu = styled.div`
  position: absolute;
  top: ${sizes.size10};
  left: ${sizes.size45};
  padding: ${sizes.size10};
  width: 155px;
  background: #000;
  flex-direction: column;
  ${mqSimple({
    display: ["none", "flex"],
  })}
`;
const SubMenuTitle = styled.span`
  font-size: ${sizes.size14};
  opacity: 0.5;
  text-transform: capitalize;
`;
const SubMenuItem = styled.li`
  font-size: ${sizes.size14};
  display: flex;
  align-items: center;
  .active-arrow {
    transform: scale(0.4);
  }
  a {
    text-decoration: none;
    color: ${colors.white};
    transition: all 0.25s ease-in-out;
    &:hover {
      color: ${colors.red};
      transition: all 0.25s ease-in-out;
    }
  }
`;
const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: ${sizes.size5};
  gap: ${sizes.size3};

  ${mqSimple({
    display: ["none", "flex"],
  })}
`;
