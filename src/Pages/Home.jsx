import { css } from "@emotion/css";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <>
      <div
        className={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to bottom, #00000070, transparent);
          z-index: 5;
        `}
      ></div>
      <Slider />
    </>
  );
};

export default Home;
