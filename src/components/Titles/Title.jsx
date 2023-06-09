/* eslint-disable react/prop-types */
import { css } from "@emotion/css";

const Title = ({ children }) => {
  return (
    <h1
      className={css`
        font-size: 18px;
        font-family: ahganirya;
        width: 100%;
      `}
    >
      {children}
    </h1>
  );
};

export default Title;
