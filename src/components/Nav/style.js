import { css } from "@emotion/css";
export const style = (pathname) => css`
  position: ${pathname === "/" ? "absolute" : "relative"};
  background: ${pathname === "/" ? "transparent" : "white"};
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1% 2% 0.5% 1%;
  align-items: center;
  box-shadow: ${pathname === "/"
    ? "0px 0px 3px 0px aliceblue"
    : "0px 0px 3px 0px #ddd"};
  box-sizing: border-box;
  .logo {
    cursor: pointer;
    display: flex;
    padding: .2rem 0;
  }
  .menu {
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: ${pathname === "/" ? "aliceblue" : "black"};
      }
    }
  }
`;
