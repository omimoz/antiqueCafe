import { NavItems } from "../../data/NavItems";
import useDimenstion from "../../hooks/useDimenstion";
import { style } from "./style";
import Logo from "/Logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useDimenstion();
  return (
    <div className={style(pathname)}>
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img alt="logo" src={Logo} width={width < 700 ? 160 : 250} />
      </div>
      <div className="menu">
        <ul>
          {NavItems.map((item) => (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
