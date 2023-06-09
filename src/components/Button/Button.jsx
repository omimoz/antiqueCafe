/* eslint-disable react/prop-types */

import { css } from "@emotion/css";

const Button = ({ type, children }) => {
  return (
    <button
      className={css`
        background: ${type === "primary" ? "var(--primary-color)" : "inherit"};
        color: ${type === "primary" ? "white" : "inherit"};
        padding: 0.7rem 1.3rem;
        border-radius: 7px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        &:hover {
          opacity: 0.9;
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
