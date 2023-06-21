import { useEffect, useState } from "react";
import { TourList } from "widgets/tours/ToursList";

const MyToursPage: React.FC = () => {
  const [tours, setTours] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("tours")) {
      const tours = localStorage.getItem("tours");
      const favTours = JSON.parse(tours!).filter((tour: any) => {
        if (tour.isLiked) return tour;
      });

      setTours(favTours);
    }
  }, []);

  return <div>{tours && <TourList data={tours} />}</div>;
};

export default MyToursPage;
