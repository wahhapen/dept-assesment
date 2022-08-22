import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import {
  FocusTrapRegion,
  Menu,
  MenuButton,
  MenuItem,
  useMenuState,
} from "ariakit";
import React, { useEffect } from "react";
import { ActiveArrow, MenuIcon } from "../../../assets";
import { colors, mq, mqSimple, sizes } from "../../../consts";
import { LangMenu } from "./LanguageMenu";
import { MenuTrail } from "./MenuTrail";

const menuTitle = "Menu";

const menuLinks = [
  { title: "Home", url: "/", active: true },
  { title: "Work", url: "#work" },
  { title: "Culture", url: "#culture" },
  { title: "Services", url: "#services" },
  { title: "Partners", url: "#partners" },
  { title: "Stories", url: "#stories" },
  { title: "Careers", url: "#careers" },
  { title: "Events", url: "#events" },
  { title: "Contact", url: "#contact" },
];

interface IProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const NavMenu: React.FC<IProps> = ({ setIsMenuOpen }) => {
  const menu = useMenuState({ fixed: true });

  useEffect(() => {
    setIsMenuOpen(menu.open);
  }, [menu.open]);

  return (
    <NavMenuStyled>
      <Global
        styles={css`
          body {
            height: ${menu.open ? "100vh" : "auto"};
            overflow-y: ${menu.open ? "hidden" : "auto"};
          }
        `}
      />
      <FocusTrapRegion className="wrapper" enabled={menu.open}>
        <MenuButton state={menu} className="menuButton">
          <MenuButtonTitleStyled isOpen={menu.open}>
            {menuTitle}
          </MenuButtonTitleStyled>
          <MenuButtonIcon isOpen={menu.open} />
        </MenuButton>

        <Menu state={menu} className="menuStyle">
          <MenuInner>
            <MenuTrail open={menu.open}>
              {menuLinks.map((link) => (
                <MenuItem as="span" key={link.title} className={"menuItem"}>
                  <MenuLink href={link.url}>
                    {link.active && <ActiveArrow />}
                    <span>{link.title}</span>
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuTrail>
          </MenuInner>
          <LangMenu />
        </Menu>
      </FocusTrapRegion>
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.div`
  .menuButton {
    border: none;
    text-transform: uppercase;
    padding: 0;
    cursor: pointer;
    ${mq({ backgroundColor: ["transparent", "transparent"] })}
  }
  .menuStyle {
    z-index: 999;
    position: absolute;
    right: ${sizes.size8};
    top: ${sizes.size12};
    width: 100vw;
    height: calc(100vh - ${sizes.size48});
    border: none;
    text-transform: uppercase;
    min-width: 180px;
    outline: none;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: auto;
    overscroll-behavior: contain;
    margin: 0;
    padding: 0 ${sizes.size16};
    background-color: ${colors.black};
    ${mqSimple({
      padding: [`0 ${sizes.size16}`, `0 ${sizes.size48}`],
    })}

    list-style: none;
    &:after {
      content: "";
      pointer-events: none;
      bottom: 0;
      right: 0;
      position: fixed;
      width: 100vw;
      height: 50vh;
      background: linear-gradient(
        358deg,
        ${colors.black} 1.49%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
  .menuItem {
    border: none;
    width: 100%;
    display: flex;
    padding-top: ${sizes.size12};
    padding-bottom: ${sizes.size4};
    justify-content: flex-end;
    border-bottom: 1px solid ${colors.grey3};
    text-transform: uppercase;
    ${mq({ backgroundColor: ["transparent", "transparent"] })}
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
      transition: all 0.25s ease-in-out;
      border-bottom: 1px solid ${colors.grey4};
      a {
        transition: all 0.25s ease-in-out;
        color: ${colors.red};
      }
    }
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  font-size: ${sizes.size34};
  color: ${colors.white};
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  ${mqSimple({ gap: [`${sizes.size10}`, `${sizes.size26}`] })};
  .active-arrow {
    ${mqSimple({
      transform: [
        "scale(0.7) translate(6px, 8px);",
        "scale(1) translate(5px, -1px);",
      ],
    })};
  }
`;

const MenuInner = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${sizes.size32};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface IMenuButtonProps {
  isOpen?: boolean;
}
const MenuButtonTitleStyled = styled.span<IMenuButtonProps>`
  font-size: ${sizes.size16};
  line-height: ${sizes.size18};
  color: ${(p) => (p.isOpen ? "transparent" : colors.white)},
    ${mqSimple({ opacity: ["1", "0"] })};
`;

const MenuButtonIcon: React.FC<IMenuButtonProps> = ({ isOpen }) => (
  <MenuButtonIconStyled isOpen={isOpen}>
    <MenuIcon />
  </MenuButtonIconStyled>
);
const MenuButtonIconStyled = styled.span<IMenuButtonProps>`
  color: ${colors.white};
  ${mqSimple({
    position: ["absolute", "relative"],
    right: [`${sizes.size10}`, "auto"],
    top: [`${sizes.size6}`, "auto"],
  })}
  .dots {
    ${mqSimple({ opacity: ["0", "1"] })}
    visibility: ${(p) => (p.isOpen ? "hidden" : "visible")};
    transition: transform ease-in-out 0.25s;
  }
  .dot-1,
  .dot-3 {
    transition: transform ease-in-out 0.25s;
  }
  .close {
    transition: transform ease-in-out 0.25s;
    opacity: ${(p) => (p.isOpen ? "1" : "0")};
  }
  &:hover {
    .dot-1 {
      transform: translateX(4%);
      transition: transform ease-in-out 0.25s;
    }
    .dot-3 {
      transform: translateX(-4%);
      transition: transform ease-in-out 0.25s;
    }
    .close {
      transform: scale(1.1);
      transition: transform ease-in-out 0.25s;
    }
  }
`;
