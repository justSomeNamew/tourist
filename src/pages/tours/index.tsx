import { useEffect, useState } from "react";
import { TourList } from "widgets/tours/ToursList";

import styles from "./index.module.scss";

const ToursPage: React.FC = () => {
  const [tours, setTours] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("tours")) setTours(localStorage.getItem("tours"));
  }, []);

  return (
    <div>
      <p className={styles.header}>Туры</p>
      {tours && <TourList data={JSON.parse(tours)} />}
    </div>
  );
};

export default ToursPage;
