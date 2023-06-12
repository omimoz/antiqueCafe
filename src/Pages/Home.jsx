import { css } from "@emotion/css";
import Slider from "../components/slider/Slider";
import useDimenstion from "../hooks/useDimenstion";

const Home = () => {
  const { width } = useDimenstion();
  return (
    <>
      <div
        className={css`
          position: fixed;
          width: ${width < 700 ? "340%" : "232%"};
          height: ${width < 700 ? "127%" : "147%"};
          background-image: ${width < 700
            ? "radial-gradient(#ffffff00 82%, #ffffff9e 103%)"
            : "radial-gradient(#ffffff00 82%, #ffffff9e 127%)"};
          z-index: 5;
          margin: 0%;
        `}
      ></div>
      <Slider />
    </>
  );
};

export default Home;
