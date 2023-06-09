import { css } from "@emotion/css";
import AboutImg from "/about.jpg";
import LinkTo from "../components/Links/LinkTo";
import Title from "../components/Titles/Title";
import useDimenstion from "../hooks/useDimenstion";
const About = () => {
  const { width } = useDimenstion();
  return (
    <div className={style(width)}>
      <section>
        <div className="HeaderImg">
          <img alt="aboutHead" src={AboutImg} />
          <LinkTo link={"main"} styles="scroll">
            <div className="field">
              <div className="mouse"></div>
            </div>
          </LinkTo>
        </div>
      </section>
      <div className="Wrappcontent">
        <div className="title">
          <Title>About Us</Title>
        </div>
        <section id="main">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
const style = (width) => css`
  max-width: 1600px;
  margin: 0 auto;
  .HeaderImg {
    position: relative;
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
    border-radius: 0px 0px 1rem 1rem;
  }
  .scroll {
    position: absolute;
    bottom: 5%;
    z-index: 47;
    width: 100%;
    left: 0;
    color: red;
    text-align: center;
    display: ${width < 800 ? "none" : "block"};
  }

  .mouse {
    width: 30px;
    height: 60px;
    border: 3px solid #333;
    border-radius: 60px;
    position: relative;
    margin: 0 auto;
    &::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      border-radius: 50%;
      opacity: 1;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }
`;
