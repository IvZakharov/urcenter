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

const ServicesMain = ({ menus }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [menusState, setMenusState] = React.useState();

  React.useEffect(() => {
    const basic = menus.find((obj) => obj?.title === "Основные услуги");
    const changes = menus.find((obj) => obj?.title === "Внесение изменений");
    const liquidation = menus.find((obj) => obj?.title === "Ликвидация");
    const registration = menus.find((obj) => obj?.title === "Регистрация");

    setMenusState({
      basic: basic?.links,
      changes: changes?.links,
      liquidation: liquidation?.links,
      registration: registration?.links,
    });

    setIsLoading(false);
  }, []);

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
            <Basic servicesList={!isLoading ? menusState.basic : null} />
          </SwiperSlide>
          <SwiperSlide>
            <Changes servicesList={!isLoading ? menusState.changes : null} />
          </SwiperSlide>
          <SwiperSlide>
            <Registration
              servicesList={!isLoading ? menusState.registration : null}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Liquidation
              servicesList={!isLoading ? menusState.liquidation : null}
            />
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
          <Basic servicesList={!isLoading ? menusState.basic : null} />
          <Changes servicesList={!isLoading ? menusState.changes : null} />
          <Registration
            servicesList={!isLoading ? menusState.registration : null}
          />
          <Liquidation
            servicesList={!isLoading ? menusState.liquidation : null}
          />
        </>
      )}
    </section>
  );
};

export default ServicesMain;
