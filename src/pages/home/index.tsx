import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "shared/ui/Image";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";

const HomePage: React.FC = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        verticalClass: styles.pagination,
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}
      autoplay={{
        delay: 2000,
      }}
    >
      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <div className={styles.place}>
            <div className={styles.slideDescription}>Дубай</div>
            <p className={styles.placeInfo}>
              Объединенные Арабские Эмираты (ОАЭ) – государство на Аравийском
              полуострове вдоль южного побережья Персидского залива, состоящее
              из семи эмиратов. Столица страны Абу-Даби, расположенная на
              прибрежном острове, славится Большой мечетью шейха Зайда, которая
              вмещает более 40 тысяч верующих и освещается хрустальными люстрами
            </p>
          </div>
        </div>
        <Image src="https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <div className={styles.place}>
            <div className={styles.slideDescription}>Дагестан</div>
            <p className={styles.placeInfo}>
              Дагеста́н, официально Республика Дагеста́н — субъект Российской
              Федерации, республика в её составе. Входит в состав
              Северо-Кавказского федерального округа, является частью
              Северо-Кавказского экономического района. Образована 20 января
              1921 года как автономная республика в составе РСФСР.
            </p>
          </div>
        </div>
        <Image src="https://s0.rbk.ru/rbcplus_pics/media/img/2/84/296559046516842.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <div className={styles.place}>
            <div className={styles.slideDescription}>Милан</div>
            <p className={styles.placeInfo}>
              Милан – крупный город на севере Италии, расположенный в Ломбардии,
              мировая столица дизайна и моды. Здесь находится фондовая биржа
              Италии, поэтому город также считается финансовым центром страны.
            </p>
          </div>
        </div>
        <Image src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/milan_2.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
