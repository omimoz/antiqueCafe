import { style } from "./style";

// eslint-disable-next-line react/prop-types
export default function Wrapper({ children }) {
  return <div className={style}>{children}</div>;
}
