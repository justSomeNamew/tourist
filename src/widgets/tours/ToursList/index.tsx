import { TourCard } from "entities/Tour/ui/TourCard";
import styles from "./index.module.scss";

export const TourList: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.tourListWrapper}>
      <div className={styles.tourList}>
        {data.map((tour: any, index: number) => {
          return <TourCard data={tour} key={index} />;
        })}
      </div>
    </div>
  );
};
