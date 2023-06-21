import { Image } from "shared/ui/Image";
import styles from "./index.module.scss";
import { TourValues } from "entities/Tour/types/types";
import { Link } from "shared/ui/Link";
import { Like } from "shared/ui/Like";

export const TourCard: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.imgWrapper}>
        <Image src={`${data.image}`} />
        <p className={styles.country}>
          <Image src={TourValues[`${data.countryName}`]} />
        </p>
      </div>

      <div className={styles.tourCard__contain}>
        <div className={styles.tourCard__table}>
          {data.regions.map((region: any, i: number) => {
            return (
              <Link
                to={`/tours-list/${region.id}`}
                className={styles.link}
                key={i}
              >
                <p>{region.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.tourCard__table}>
          {data.prices.map((price: string, i: number) => {
            return <p key={i}>{price} руб</p>;
          })}
        </div>
      </div>

      <div className={styles.actions}>
        <Like isLiked={data.isLiked} idEntity={data.id} />
      </div>
    </div>
  );
};
