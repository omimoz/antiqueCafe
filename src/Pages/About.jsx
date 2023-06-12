import { css } from "@emotion/css";
import useDimenstion from "../hooks/useDimenstion";
import AboutImg1 from "/about1.jpg";
import AboutImg2 from "/about2.jpg";
import Title from "../components/Titles/Title";
const About = () => {
  const { width } = useDimenstion();
  return (
    <div className={style(width)}>
      <div className="header">
        <Title>ABOUT US</Title>
      </div>

      <p className="firstLine">
        Welcome to Antique Cafe, a journey through time and taste At Antique
        cafe, we believe that great experiences are created by seamlessly
        blending the past with the present. With a passion for history, culture,
        and exceptional coffee, we have carved a unique space for ourselves in
        the heart of Tehran. Now, we are thrilled to announce that Antique Café
        is expanding its horizons and bringing its distinctive charm to the
        vibrant city of Dubai.
      </p>
      <section className="sec">
        <div className="imgSec">
          <img alt="about1" src={AboutImg1} />
        </div>
        <div className="textSec">
          <Title>Our Story</Title>
          <p>
            Founded in Tehran in 2018, Antique Café was born out of a deep
            appreciation for antiques and a desire to create an extraordinary
            café experience. The brainchild of a group of avid collectors and
            coffee enthusiasts, our café quickly became a beloved destination
            for locals and tourists alike. Over the years, Antique Café has
            earned a reputation for its meticulous curation of antique
            furniture, decor, and artifacts, transporting patrons to a bygone
            era while tantalizing their taste buds.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="textSec">
          <Title>Our move to Dubai</Title>
          <p>
            After establishing a loyal following in Tehran, we are thrilled to
            embark on a new adventure in Dubai. With its dynamic cultural scene
            and diverse population, Dubai offers the perfect backdrop for
            Antique Café to flourish. We are excited to introduce our unique
            concept to Dubai&apos;s discerning residents and visitors, creating
            an oasis of serenity amidst the bustling cityscape.
          </p>
          <p>
            As we set foot in this cosmopolitan city, we bring with us an array
            of antique treasures carefully curated to captivate and inspire. Our
            team of passionate connoisseurs will continue to scour the globe,
            seeking out exceptional antiques that breathe new life into our
            café. Each visit to Antique Café will be an opportunity to discover
            something extraordinary, both in our surroundings and on your plate.
          </p>
          <p>
            We look forward to welcoming you to Café Antique Dubai, where time
            stands still, and memories are forged over a cup of exceptional
            coffee.
          </p>
        </div>
        <div className="imgSec">
          <img alt="about2" src={AboutImg2} />
        </div>
      </section>
    </div>
  );
};

export default About;
const style = (width) => css`
  max-width: 1600px;
  padding: 20px;
  margin: 0 auto;
  .HeaderImg {
    position: relative;
  }
  .firstLine {
    margin-bottom: 5%;
    border-bottom: 1px solid #00000029;
    padding-bottom: 20px;
  }
  .header {
    text-align: center;
    border-bottom: 1px solid #00000029;
    margin-bottom: 2%;
  }
  .Wrappcontent {
    padding: 12px;
    p {
      text-align: justify;
    }
  }
  .title {
    border-bottom: 1px solid #e6e6e6;
    margin-top: 2rem;
  }
  img {
    position: relative;
    z-index: 0;
    width: 100%;
    border-radius: 5px;
  }
  .sec {
    margin-bottom: 5%;
    display: ${width < 1200 ? "block" : "flex"};
    flex-wrap: wrap;
    width: 100%;
    gap: 5%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .imgSec {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
      padding: ${width < 1200 ? "5% 0" : "0"};
    }
    .textSec {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
      align-self: normal;
      justify-content: center;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      padding: 2rem;
    }
  }
`;
