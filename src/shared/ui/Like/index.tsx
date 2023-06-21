import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import styles from "./index.module.scss";
import { useState } from "react";

type LikeProps = {
  isLiked: boolean;
  idEntity: number;
};

export const Like: React.FC<LikeProps> = ({ isLiked, idEntity }) => {
  const [isLikedEntity, setIsLikedEntity] = useState(isLiked);

  const handleLike = () => {
    const tours = localStorage.getItem("tours");

    if (!tours) return;
    const currentTour = JSON.parse(tours).find(
      (tour: any) => tour.id === idEntity
    );

    const updatedTours = JSON.parse(tours).map((tour: any) => {
      if (tour.id === idEntity) {
        return { ...tour, isLiked: !isLiked };
      }
      return tour;
    });

    setIsLikedEntity(!isLikedEntity);

    localStorage.setItem("tours", JSON.stringify(updatedTours));
  };
  return (
    <div onClick={handleLike}>
      {isLikedEntity ? (
        <FavoriteOutlinedIcon className={styles.like} />
      ) : (
        <FavoriteBorderOutlinedIcon className={styles.like} />
      )}
    </div>
  );
};
