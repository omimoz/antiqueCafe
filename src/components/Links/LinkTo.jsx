/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
const LinkTo = ({ link, children, styles }) => {
  return (
    <AnchorLink className={styles} href={`#${link}`}>
      {children}
    </AnchorLink>
  );
};

export default LinkTo;
