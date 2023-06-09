import { css } from "@emotion/css";
export const style = (width) => css`
  position: relative;
  .hero-slider-overlay {
    max-width: 550px;
    position: relative;
    left: ${width < 700 ? "0%" : width < 900 ? "10%" : "20%"};
    color: aliceblue;
    margin: ${width < 700 ? "0 auto" : width < 900 ? "0" : "0"};
    z-index: 10;
  }
  .innerWrapper {
    padding: 1rem;
    h1 {
      background: linear-gradient(
        to top,
        #00000000 0,
        #0000006e,
        #00800000 83%
      );
      padding: 5rem 1rem;
      display: table-cell;
    }
    p {
      text-align: justify;
    }
  }

  .btn {
    width: 100%;
    text-align: right;
  }
`;
