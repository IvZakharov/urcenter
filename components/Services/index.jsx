import styles from "./Services.module.scss";
import React from "react";
import Basic from "./Basic";
import Changes from "./Changes";
import Registration from "./Registration";
import {
  useMediaQuery,
  Container,
  Grid,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Liquidation from "./Liquidation";

const Index = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);
  const basicList = [
    "Решения",
    "Сделки с долями в ООО",
    "Брачный договор",
    "Обеспечение доказательств",
    "Удостоверение протоколов",
    "Получение выписки из ЕГРЮЛ",
    "Апостиль документов",
    "Перевод документов",
  ];
  const changesList = [
    "Отчуждение долей в ООО",
    "Смена уставного капитала",
    "Смена директора",
    "Смена состава участников",
    "Смена вида деятельности",
  ];
  const liquidationList = [
    "Ликвидация ИП",
    "Ликвидация ООО",
    "Добровольная ликвидация",
    "Ликвидация-реорганизация",
    "Реорганизация юридических лиц",
  ];

  return (
    <section className={styles.services}>
      {!matches ? (
        <Swiper
          navigation={{
            prevEl: arrowPrev.current,
            nextEl: arrowNext.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = arrowPrev.current;
            swiper.params.navigation.nextEl = arrowNext.current;
          }}
          loop={true}
          modules={[Navigation]}
          autoHeight={true}
          className={styles.servicesSwiper}
        >
          <SwiperSlide>
            <Basic servicesList={basicList} />
          </SwiperSlide>
          <SwiperSlide>
            <Changes servicesList={changesList} />
          </SwiperSlide>
          <SwiperSlide>
            <Registration />
          </SwiperSlide>
          <SwiperSlide>
            <Liquidation servicesList={liquidationList} />
          </SwiperSlide>
          <IconButton className={styles.arrowPrev} ref={arrowPrev}>
            <ArrowLeftIcon sx={{ color: "primary.main" }} fontSize={"large"} />
          </IconButton>
          <IconButton className={styles.arrowNext} ref={arrowNext}>
            <ArrowLeftIcon
              sx={{ color: "primary.main", transform: "rotate(180deg)" }}
              fontSize={"large"}
            />
          </IconButton>
        </Swiper>
      ) : (
        <>
          <Basic servicesList={basicList} />
          <Changes servicesList={changesList} />
          <Registration />
          <Liquidation servicesList={liquidationList} />
        </>
      )}
    </section>
  );
};

export default Index;
