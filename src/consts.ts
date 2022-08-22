import { keyframes } from "@emotion/react";
import facepaint from "facepaint";

export const breakpoints = [768, 992, 1200];
export const bpSimple = [breakpoints[1]];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
export const mqSimple = facepaint(
  bpSimple.map((bp) => `@media (min-width: ${bp}px)`)
);

export const colors = {
  purple: "#5115f7",
  grey: "#646464",
  grey2: "#dddddd",
  grey3: "#808080",
  grey4: "#3e3e3e",
  black: "#000000",
  black2: "#121212",
  white: "#FFFFFF",
  red: "#FF2929",
};

export const sizes = {
  size1200: "75rem",
  size948: "59.25rem",
  size800: "50rem",
  size768: "48rem",
  size640: "40rem",
  size580: "36.25rem",
  size560: "35rem",
  size540: "33.75rem",
  size520: "32.5rem",
  size500: "31.25rem",
  size480: "30rem",
  size465: "29rem",
  size440: "27.5rem",
  size424: "26.5rem",
  size400: "25rem",
  size360: "22.5rem",
  size320: "20rem",
  size300: "18.75rem",
  size280: "17.5rem",
  size275: "17.1875rem",
  size260: "16.25rem",
  size255: "15.9375rem",
  size240: "15rem",
  size220: "13.75rem",
  size200: "12.5rem",
  size192: "12rem",
  size191: "11.9375rem",
  size176: "11rem",
  size172: "10.75rem",
  size160: "10rem",
  size150: "9.375rem",
  size144: "9rem",
  size140: "8.75rem",
  size130: "8.125rem",
  size128: "8rem",
  size120: "7.5rem",
  size117: "7.3125rem",
  size114: "7.125rem",
  size112: "7rem",
  size110: "6.875rem",
  size100: "6.25rem",
  size96: "6rem",
  size90: "5.625rem",
  size82: "5.125rem",
  size80: "5rem",
  size72: "4.5rem",
  size70: "4.375rem",
  size66: "4.125rem",
  size64: "4rem",
  size60: "3.75rem",
  size56: "3.5rem",
  size54: "3.375rem",
  size52: "3.25rem",
  size50: "3.125rem",
  size48: "3rem",
  size46: "2.875rem",
  size45: "2.8125rem",
  size43: "2.6875rem",
  size40: "2.5rem",
  size36: "2.25rem",
  size34: "2.125rem",
  size32: "2rem",
  size30: "1.875rem",
  size28: "1.75rem",
  size26: "1.625rem",
  size24: "1.5rem",
  size22: "1.375rem",
  size21: "1.3125rem",
  size20: "1.25rem",
  size18: "1.125rem",
  size16: "1rem",
  size15: "0.9375rem",
  size14: "0.875rem",
  size12: "0.75rem",
  size10: "0.625rem",
  size8: "0.5rem",
  size6: "0.375rem",
  size5: "0.3125rem",
  size4: "0.25rem",
  size3: "0.1875rem",
  size2: "0.125rem",
  size1: "0.0625rem",
};

export const fontFamily = "MaisonNeueMG,Helvetica,Arial";

export const underlineIn = keyframes`
  0% {
      transform: translateZ(0)
  }

  to {
      transform: translate3d(101%,0,0)
  }
`;
export const underlineOut = keyframes`
  0% {
      transform: translate3d(-101%,0,0)
  }

  to {
      transform: translateZ(0)
  }
`;
