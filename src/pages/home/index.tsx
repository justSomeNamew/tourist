import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";
import { Image } from "shared/ui/Image";

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
        <div className={styles.slideWrapper}></div>
        <Image src="https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg" />
        <div className={styles.slideDescription}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideWrapper}></div>
        <Image src="https://s0.rbk.ru/rbcplus_pics/media/img/2/84/296559046516842.jpg" />
        <div className={styles.slideDescription}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideWrapper}></div>
        <Image src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/milan_2.jpg" />
        <div className={styles.slideDescription}></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
