import { useParams } from "react-router";
import { Image } from "shared/ui/Image";
import { TOURS_BY_REGION } from "shared/mock/tours-by-region";
import { TourValues } from "entities/Tour/types/types";

import styles from "./index.module.scss";

const TourPage: React.FC = () => {
  const { tourId } = useParams();

  const currentTour = TOURS_BY_REGION.find((tour) => {
    if (tour.id === Number(tourId)) return tour;
  });

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
