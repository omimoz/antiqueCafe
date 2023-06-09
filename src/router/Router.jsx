import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { css } from "@emotion/css";
import Nav from "../components/Nav/Nav";
import Home from "../Pages/Home";
import About from "../Pages/About";

const Layout = () => {
  return (
    <div className="app">
      <div className={style}>
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);
export default Router;
const style = css``;
