import classNames from "classnames";
import { Link as NavLink } from "react-router-dom";

import styles from "./index.module.scss";

type LinkProps = {
  to: string;
  children: JSX.Element;
  className?: string;
};

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <NavLink to={to} className={classNames(styles.link, className)}>
      {children}
    </NavLink>
  );
};
