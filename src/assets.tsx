import * as React from "react";

export const DeptLogo: React.FC = () => (
  <svg className="dept-logo" width="89" height="25" fill="none">
    <path
      d="M22.739 12.235c0-6.204-3.387-10.983-11.996-10.983h-9.21v21.966h9.21c8.61 0 11.996-4.78 11.996-10.983Zm-6.267 0c0 4.336-2.437 5.95-5.824 5.95H7.514v-11.9h3.134c3.387 0 5.824 1.614 5.824 5.95ZM24.171 23.218H41.58v-5H30.154V14.45h10.033V9.703H30.154v-3.45h11.14V1.252H24.172v21.966ZM61.844 8.88c0-5.54-3.545-7.628-9.052-7.628h-9.527v21.966h5.982v-6.71h3.545c5.507 0 9.052-2.09 9.052-7.628Zm-6.203 0c0 2.152-1.013 3.038-3.45 3.038h-2.944V5.841h2.944c2.437 0 3.45.887 3.45 3.039ZM62.497 6.38h6.932v16.838h5.982V6.379h6.931V1.252H62.498v5.127ZM79.857 20.143a3.595 3.595 0 0 0 3.597 3.596c1.988 0 3.613-1.609 3.613-3.596a3.623 3.623 0 0 0-3.613-3.613c-1.988 0-3.597 1.625-3.597 3.613Zm.694 0c0-1.641 1.294-2.982 2.903-2.982s2.919 1.34 2.919 2.982c0 1.64-1.31 2.965-2.919 2.965-1.61 0-2.903-1.325-2.903-2.965Zm1.215 1.782H82.9v-1.23h.648l.678 1.23h1.23l-.82-1.451c.379-.158.662-.584.662-1.057 0-.836-.536-1.23-1.451-1.23h-2.082v3.738Zm2.382-2.492c0 .3-.189.426-.552.426H82.9v-.79h.695c.363 0 .552.096.552.364Z"
      fill="#fff"
    />
  </svg>
);
export const ActiveArrow: React.FC = () => (
  <svg className="active-arrow" width="22" height="25" fill="none">
    <path d="M21.528 12.329 0 25V0l21.528 12.329Z" fill="#fff" />
  </svg>
);
export const TopArrow: React.FC = () => (
  <svg width="18" height="36" fill="none">
    <path
      d="M8.21.296A.605.605 0 0 1 9.24.28l8.656 13.326c.272.418-.02.98-.51.98H.614c-.482 0-.776-.545-.52-.965L8.208.296Z"
      fill="#5115F7"
    />
    <path
      d="M6.872 8.287c0-.348.275-.63.613-.63h3.069c.339 0 .614.282.614.63V35.37c0 .348-.275.63-.614.63H7.485a.622.622 0 0 1-.613-.63V8.287Z"
      fill="#5115F7"
    />
  </svg>
);

export const FbIcon: React.FC = () => {
  return (
    <svg width="30" height="30" fill="none">
      <path
        d="M22.5 2.5h-3.75a6.25 6.25 0 0 0-6.25 6.25v3.75H8.75v5h3.75v10h5v-10h3.75l1.25-5h-5V8.75a1.25 1.25 0 0 1 1.25-1.25h3.75v-5Z"
        fill="#fff"
      />
    </svg>
  );
};

export const TwIcon: React.FC = () => {
  return (
    <svg width="27" height="27" fill="none">
      <path
        d="M25.875 3.375a12.262 12.262 0 0 1-3.532 1.721A5.04 5.04 0 0 0 13.5 8.471v1.125A11.993 11.993 0 0 1 3.375 4.5S-1.125 14.625 9 19.125a13.095 13.095 0 0 1-7.875 2.25c10.125 5.625 22.5 0 22.5-12.937a5.062 5.062 0 0 0-.09-.934 8.685 8.685 0 0 0 2.34-4.129Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IgIcon: React.FC = () => {
  return (
    <svg width="27" height="27" fill="none">
      <path
        d="M19.125 2.25H7.875A5.625 5.625 0 0 0 2.25 7.875v11.25a5.625 5.625 0 0 0 5.625 5.625h11.25a5.625 5.625 0 0 0 5.625-5.625V7.875a5.625 5.625 0 0 0-5.625-5.625Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12.791a4.5 4.5 0 1 1-8.903 1.32A4.5 4.5 0 0 1 18 12.791ZM19.688 7.313h.01"
        stroke="#0E0E0E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MenuIcon: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className="menu-icon"
  >
    <g className="close">
      <path
        className="close-cross"
        d="M12.78 12.781L27.216 27.22M27.217 12.781L12.779 27.22"
        stroke="currentColor"
        strokeWidth="1.3"
      ></path>
    </g>
    <g className="dots">
      <circle
        className="dot-1"
        cx="31"
        cy="20.5"
        r="3.5"
        fill="currentColor"
      ></circle>
      <circle
        className="dot-2"
        cx="20"
        cy="20.5"
        r="3.5"
        fill="currentColor"
      ></circle>
      <circle
        className="dot-3"
        cx="9"
        cy="20.5"
        r="3.5"
        fill="currentColor"
      ></circle>
    </g>
  </svg>
);

export const ReadMoreIcon = () => (
  <svg width="12" height="12" fill="none">
    <circle
      className="fake-link-circle"
      cx="6"
      cy="6"
      r="5.7"
      stroke="#fff"
      strokeWidth=".6"
    />
    <circle
      className="fake-link-bullet"
      cx="6"
      cy="6"
      r="1.7"
      fill="#fff"
      stroke="#fff"
      strokeWidth=".6"
    />
  </svg>
);
