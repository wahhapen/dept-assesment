import React from "react";
import { css, Global } from "@emotion/react";
import { colors, fontFamily } from "./consts";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        :after,
        :before {
          box-sizing: border-box;
        }

        @font-face {
          font-family: MaisonNeueMG;
          font-weight: 300;
          font-style: normal;
          src: url(https://www.deptagency.com/wp-content/themes/dept/public/MaisonNeueMG-Light.woff2)
              format("woff2"),
            url(https://www.deptagency.com/wp-content/themes/dept/public/MaisonNeueMG-Light.woff)
              format("woff");
          font-display: swap;
        }

        @font-face {
          font-family: MaisonNeueMG;
          font-weight: 400;
          font-style: normal;
          src: url(https://www.deptagency.com/wp-content/themes/dept/public/MaisonNeueMG-Book.woff2)
              format("woff2"),
            url(https://www.deptagency.com/wp-content/themes/dept/public/MaisonNeueMG-Book.woff)
              format("woff");
          font-display: swap;
        }

        html {
          overflow-x: hidden;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: ${fontFamily};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: ${colors.white};
          background: ${colors.black};
        }
      `}
    />
  );
};
