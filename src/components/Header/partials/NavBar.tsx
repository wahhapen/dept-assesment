import styled from "@emotion/styled";
import { Button } from "ariakit";
import React from "react";
import { colors, mqSimple, sizes } from "../../../consts";

export const navLinks = [
  { title: "Work", url: "/" },
  { title: "Culture", url: "#culture" },
  { title: "Services", url: "#services" },
  { title: "Insights", url: "#insights" },
  { title: "Careers", url: "#careers" },
  { title: "Contact", url: "#contact" },
];

interface IProps {
  isMenuOpen?: boolean;
}

export const NavBar: React.FC<IProps> = ({ isMenuOpen }) => {
  const currentPagePath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <DesktopNav isMenuOpen={isMenuOpen}>
      {navLinks.map((link) => {
        const isActive = currentPagePath === link.url;

        return (
          <NavItem isActive={isActive} key={link.title}>
            <Button as="a" className="navLink" href={link.url}>
              {link.title}
            </Button>
          </NavItem>
        );
      })}
    </DesktopNav>
  );
};

const DesktopNav = styled.ul<IProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: flex-end;
  gap: ${sizes.size48};
  padding-right: ${sizes.size96};
  opacity: ${(p) => (p.isMenuOpen ? "0" : "1")};
  ${mqSimple({
    display: ["none", "flex"],
  })}
`;

interface INavItemProps {
  isActive?: boolean;
}
const NavItem = styled.li<INavItemProps>`
  border-bottom: ${(p) => (p.isActive ? `1px solid ${colors.white}` : "none")};
  .navLink {
    background-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${sizes.size18};
    color: ${colors.white};
  }
`;
