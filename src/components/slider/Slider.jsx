import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { images, mobImages } from "../../data/Images";
import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import useDimenstion from "../../hooks/useDimenstion";
import { style } from "./style";
import Title from "../Titles/Title";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { width } = useDimenstion();
  return (
    <HeroSlider
      className={style(width)}
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 10,
        onSliding: (nextSlide) => setCurrent(nextSlide - 1),
      }}
    >
      <Overlay className="textsSlider">
        <Wrapper>
          <div className="innerWrapper">
            <Title>{images[current].title}</Title>
          </div>
        </Wrapper>
      </Overlay>
      {width < 600
        ? mobImages.map((item) => (
            <Slide
              key={item.id}
              label={" "}
              background={{
                backgroundImageSrc: item.url,
              }}
            />
          ))
        : images.map((item) => (
            <Slide
              key={item.id}
              label={" "}
              background={{
                backgroundImageSrc: item.url,
              }}
            />
          ))}
      <MenuNav />
    </HeroSlider>
  );
};

export default Slider;
