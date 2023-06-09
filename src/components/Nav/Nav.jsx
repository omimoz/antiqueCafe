import { NavItems } from "../../data/NavItems";
import { style } from "./style";
import Logo from "/Logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
console.log(pathname)
  return (
    <div className={style(pathname)}>
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img alt="logo" src={Logo} width={120} />
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
