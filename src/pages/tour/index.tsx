import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Image } from "shared/ui/Image";
import { TourValues } from "entities/Tour/types/types";

import styles from "./index.module.scss";

const TourPage: React.FC = () => {
  const { tourId } = useParams();
  const [tours, setTours] = useState<any>();
  const [currentTour, setCurrentTour] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("tours-by-region"))
      setTours(localStorage.getItem("tours-by-region"));
  }, []);

  useEffect(() => {
    if (tours) {
      const cTour = JSON.parse(tours).find(
        (tour: any) => tour.id === Number(tourId)
      );
      setCurrentTour(cTour);
    }
  }, [tours]);

  return (
    <div className={styles.tourPageWrapper}>
      <div className={styles.tourPage}>
        <div className={styles.tourCountry}>
          {currentTour?.country && (
            <Image src={TourValues[currentTour?.country]} />
          )}
        </div>
        <header>{currentTour?.title && <p>{currentTour?.title}</p>}</header>
        <div className={styles.tourInfo}>
          <div className={styles.tourPreviewWrapper}>
            {currentTour?.preview && (
              <Image
                src={currentTour?.preview}
                className={styles.imagePreview}
              />
            )}
          </div>
          <div className={styles.tourDescription}>
            {currentTour?.description && <p>{currentTour?.description}</p>}
          </div>
        </div>

        <div className={styles.tourPrice}>
          {currentTour?.price && <p>{currentTour?.price} руб</p>}
        </div>
      </div>
    </div>
  );
};

export default TourPage;
