import styled from "@emotion/styled";
import { Button, Separator } from "ariakit";
import React from "react";
import { DeptLogo, FbIcon, TwIcon, IgIcon, TopArrow } from "../../assets";
import {
  colors,
  mqSimple,
  sizes,
  underlineIn,
  underlineOut,
} from "../../consts";
import { navLinks } from "../Header/partials/NavBar";

const additionalInfo = {
  cocNumber: "Chamber of Commerce: 63464101",
  vatNumber: "VAT: NL 8552.47.502.B01",
  tos: "Terms and conditions",
};
const toTop = "Top";
const dept = "Dept Agency";
const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const currentPagePath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <FooterOuter>
      <FooterStyled>
        <FooterTopRow>
          <LogoLink href="/">
            <DeptLogo />
          </LogoLink>
          <FooterNav>
            {navLinks.map((link) => {
              const isActive = currentPagePath === link.url;
              return (
                <NavItem key={link.title}>
                  <NavLink
                    className={`${isActive && "active"}`}
                    href={link.url}
                  >
                    {link.title}
                  </NavLink>
                </NavItem>
              );
            })}
          </FooterNav>
          <SocialBar>
            <a href="#">
              <FbIcon />
            </a>
            <a href="#">
              <TwIcon />
            </a>
            <a href="#">
              <IgIcon />
            </a>
          </SocialBar>
        </FooterTopRow>
        <Separator className="separator" />
        <AdditionalInfo>
          <AdditionalInfoInner>
            <span>{additionalInfo.cocNumber}</span>
            <span>{additionalInfo.vatNumber}</span>
            <a href="#">{additionalInfo.tos}</a>
          </AdditionalInfoInner>
          <span>
            © {currentYear} {dept}
          </span>
        </AdditionalInfo>
      </FooterStyled>
      <ToTopSection>
        <Button className="to-top" onClick={scrollToTop}>
          <TopArrow />
          <span>{toTop}</span>
        </Button>
      </ToTopSection>
    </FooterOuter>
  );
};

const FooterOuter = styled.div`
  display: flex;
`;
const ToTopSection = styled.div`
  width: ${sizes.size117};
  background-color: ${colors.white};
  ${mqSimple({
    display: ["none", "flex"],
  })}
  .to-top {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${sizes.size16};
    text-transform: uppercase;
    font-size: ${sizes.size18};
    color: ${colors.purple};
  }
`;

const FooterStyled = styled.footer`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  gap: ${sizes.size32};
  ${mqSimple({
    padding: [
      `${sizes.size46} ${sizes.size36}`,
      `${sizes.size66} ${sizes.size40} ${sizes.size90}`,
    ],
  })}
  .separator {
    width: 100%;
    border-bottom: 1px solid ${colors.grey4};
    margin: 0;
  }
`;

const FooterTopRow = styled.div`
  display: flex;
  ${mqSimple({
    gap: [`0`, `${sizes.size100}`],
    padding: ["0", `0 ${sizes.size10}`],
  })}
`;
const LogoLink = styled.a`
  height: ${sizes.size24};
  ${mqSimple({
    display: ["none", "block"],
  })}
`;
const FooterNav = styled.ul`
  margin: 0;
  margin-bottom: ${sizes.size82};
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  ${mqSimple({
    flexDirection: ["column", "row"],
    gap: [`${sizes.size48}`, `${sizes.size20}`],
    marginTop: ["0", `${sizes.size10}`],
    marginBottom: [`${sizes.size82}`, `${sizes.size60}`],
  })}
`;
const NavItem = styled.li`
  overflow: hidden;
`;
const NavLink = styled.a`
  position: relative;
  text-transform: uppercase;
  color: ${colors.white};
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }
  &:not(.active)::after {
    animation: ${underlineIn} 0.25s ease-in-out 0s 1 forwards;
  }
  &:hover {
    &:after {
      animation: ${underlineOut} 0.25s ease-in-out 0s 1 forwards;
    }
  }
`;
const SocialBar = styled.div`
  position: absolute;
  top: ${sizes.size56};
  right: ${sizes.size40};
  gap: ${sizes.size40};
  ${mqSimple({
    display: ["flex", "none"],
  })}
  flex-direction: column;
`;
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.size26};
  color: ${colors.grey3};
  font-family: Arial, Helvetica, sans-serif;
  ${mqSimple({
    flexDirection: ["column", "row"],
    justifyContent: ["flex-start", "space-between"],
    gap: ["0", `${sizes.size36}`],
    padding: ["0", `${sizes.size24} ${sizes.size10}`],
  })}
`;

const AdditionalInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  ${mqSimple({
    flexDirection: ["column", "row"],
    gap: ["0", `${sizes.size36}`],
  })}
  a {
    color: ${colors.grey3};
    text-decoration: none;
    &:hover {
      color: ${colors.white};
    }
  }
`;
