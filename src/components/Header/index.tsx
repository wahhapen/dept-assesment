import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors, mqSimple, sizes } from "../../consts";
import { NavBar } from "./partials/NavBar";
import { NavMenu } from "./partials/Menu";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavWrapper isMenuOpen={isMenuOpen}>
      <DeptLogo isColorReverse={isMenuOpen} />
      <NavBar isMenuOpen={isMenuOpen} />
      <NavMenu setIsMenuOpen={setIsMenuOpen} />
    </NavWrapper>
  );
};

export const Header = React.memo(HeaderComponent);

interface INavWrapper {
  isMenuOpen?: boolean;
}

const NavWrapper = styled.nav<INavWrapper>((props) => {
  const bgcMenuOpen = [`${colors.black}`, `${colors.black}`];
  const bgcMenuClosed = [`${colors.white}`, `${colors.black}`];
  return mqSimple({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [
      `${sizes.size18} ${sizes.size16}`,
      `${sizes.size18} ${sizes.size16}`,
      `${sizes.size28} ${sizes.size26}`,
      `${sizes.size46} ${sizes.size56}`,
    ],
    backgroundColor: props.isMenuOpen ? bgcMenuOpen : bgcMenuClosed,
  });
});

interface ILogo {
  isColorReverse?: boolean;
}

const DeptLogo: React.FC<ILogo> = ({ isColorReverse }) => (
  <DeptLogoWrapperStyled aria-label="Dept logo" href="/">
    <DeptLogoStyled width="89" height="25">
      <DeptLogoStyledPath
        isColorReverse={isColorReverse}
        d="M22.739 12.235c0-6.204-3.387-10.983-11.996-10.983h-9.21v21.966h9.21c8.61 0 11.996-4.78 11.996-10.983Zm-6.267 0c0 4.336-2.437 5.95-5.824 5.95H7.514v-11.9h3.134c3.387 0 5.824 1.614 5.824 5.95ZM24.171 23.218H41.58v-5H30.154V14.45h10.033V9.703H30.154v-3.45h11.14V1.252H24.172v21.966ZM61.844 8.88c0-5.54-3.545-7.628-9.052-7.628h-9.527v21.966h5.982v-6.71h3.545c5.507 0 9.052-2.09 9.052-7.628Zm-6.203 0c0 2.152-1.013 3.038-3.45 3.038h-2.944V5.841h2.944c2.437 0 3.45.887 3.45 3.039ZM62.497 6.38h6.932v16.838h5.982V6.379h6.931V1.252H62.498v5.127ZM79.857 20.143a3.595 3.595 0 0 0 3.597 3.596c1.988 0 3.613-1.609 3.613-3.596a3.623 3.623 0 0 0-3.613-3.613c-1.988 0-3.597 1.625-3.597 3.613Zm.694 0c0-1.641 1.294-2.982 2.903-2.982s2.919 1.34 2.919 2.982c0 1.64-1.31 2.965-2.919 2.965-1.61 0-2.903-1.325-2.903-2.965Zm1.215 1.782H82.9v-1.23h.648l.678 1.23h1.23l-.82-1.451c.379-.158.662-.584.662-1.057 0-.836-.536-1.23-1.451-1.23h-2.082v3.738Zm2.382-2.492c0 .3-.189.426-.552.426H82.9v-.79h.695c.363 0 .552.096.552.364Z"
        fill="#fff"
      />
    </DeptLogoStyled>
  </DeptLogoWrapperStyled>
);

const DeptLogoWrapperStyled = styled.a`
  position: relative;
  min-height: ${sizes.size15};
  z-index: 1000;
  ${mqSimple({
    height: [`${sizes.size15}`, "auto"],
    display: ["block", "flex"],
    width: [`${sizes.size54}`, "auto"],
  })}
`;
const DeptLogoStyled = styled.svg`
  ${mqSimple({
    transform: ["scale(0.6) translate(-30px, -7px)", "scale(1)"],
  })}
`;

const DeptLogoStyledPath = styled.path<ILogo>((props) =>
  mqSimple({
    fill: props.isColorReverse ? ["#fff", "#fff"] : ["#000", "#fff"],
  })
);
