import cn from "classnames";

import styles from "./index.module.scss";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={cn(styles.img, className)} />;
};
