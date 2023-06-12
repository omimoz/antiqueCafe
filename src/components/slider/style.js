import { css } from "@emotion/css";
export const style = (width) => css`
  position: relative;
  .hero-slider-overlay {
    max-width: 580px;
    position: relative;
    left: 0%;
    top: ${width < 700 ? "-13rem" : "-11rem"};
    color: aliceblue;
    margin: 0 auto;
    z-index: 10;
  }
  .innerWrapper {
    padding: 1rem;
    h1 {
      padding: 5rem 1rem;
    }
    p {
      text-align: justify;
    }
  }

  .btn {
    width: 100%;
    text-align: right;
  }
  .hero-slider-menu-nav-button-description {
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
`;
