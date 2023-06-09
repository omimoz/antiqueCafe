import { css } from "@emotion/css";
export const style = (width) => css`
  position: relative;
  .hero-slider-overlay {
    max-width: 500px;
    position: relative;
    left: ${width < 700 ? "0%" : width < 900 ? "10%" : "20%"};
    color: aliceblue;
    margin: ${width < 700 ? "0 auto" : width < 900 ? "0" : "0"};
    z-index: 10;
  }
  .innerWrapper {
    padding: 1rem;
    p {
      text-align: justify;
    }
  }

  .btn {
    width: 100%;
    text-align: right;
  }
`;
