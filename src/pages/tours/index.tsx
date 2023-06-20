import { TOURS } from "shared/mock/tours";
import { TourList } from "widgets/tours/ToursList";

import styles from "./index.module.scss";

const ToursPage: React.FC = () => {
  return (
    <div>
      <p className={styles.header}>Туры</p>
      <TourList data={TOURS} />
    </div>
  );
};

export default ToursPage;
