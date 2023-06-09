import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { images, mobImages } from "../../data/Images";
import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import useDimenstion from "../../hooks/useDimenstion";
import { style } from "./style";
import Title from "../Titles/Title";
import Button from "../Button/Button";
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
            <p>{images[current].desc}</p>
            <div className="btn">
              <Button type={"primary"}>Learn More</Button>
            </div>
          </div>
        </Wrapper>
      </Overlay>
      {width < 600
        ? mobImages.map((item, index) => (
            <Slide
              key={index}
              label={item.title}
              background={{
                backgroundImageSrc: item.url,
              }}
            />
          ))
        : images.map((item, index) => (
            <Slide
              key={index}
              label={item.title}
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
