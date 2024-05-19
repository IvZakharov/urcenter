import styles from "./RegistrationSwiper.module.scss";
import React from "react";
import {
  useMediaQuery,
  Box,
  IconButton,
  Container,
  Typography,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const RegistrationSwiper = ({
  economyPrice,
  standartPrice,
  fullPrice,
  tableRows,
}) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  return (
    <section className={styles.registrationSwiper}>
      <Container>
        <h3 className={styles.subtitle}>ВЫБЕРИТЕ КОМПЛЕКС УСЛУГ:</h3>
        <Swiper
          navigation={{
            prevEl: arrowPrev.current,
            nextEl: arrowNext.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = arrowPrev.current;
            swiper.params.navigation.nextEl = arrowNext.current;
          }}
          loop={false}
          slidesPerView={matches ? 2 : 1}
          modules={[Navigation]}
          autoHeight={true}
        >
          <SwiperSlide>
            <Box className={styles.item}>
              <Box className={styles.flex}>
                <h2 className={styles.title}>Эконом</h2>
                <span className={styles.price}>{economyPrice} ₽</span>
              </Box>
              <ul className={styles.list}>
                {tableRows &&
                  tableRows.map(
                    (obj, idx) =>
                      obj.econom && (
                        <li key={idx}>
                          <span>{obj.name}</span>{" "}
                          <CheckRoundedIcon sx={{ color: "primary.main" }} />
                        </li>
                      )
                  )}
              </ul>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.item}>
              <Box className={styles.flex}>
                <h2 className={styles.title}>Стандарт</h2>
                <span className={styles.price}>{standartPrice} ₽</span>
              </Box>
              <ul className={styles.list}>
                {tableRows &&
                  tableRows.map(
                    (obj, idx) =>
                      obj.standart && (
                        <li key={idx}>
                          <span>{obj.name}</span>{" "}
                          <CheckRoundedIcon sx={{ color: "primary.main" }} />
                        </li>
                      )
                  )}
              </ul>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.item}>
              <Box className={styles.flex}>
                <h2 className={styles.title}>Полный</h2>
                <span className={styles.price}>{fullPrice} ₽</span>
              </Box>
              <ul className={styles.list}>
                {tableRows &&
                  tableRows.map(
                    (obj, idx) =>
                      obj.full && (
                        <li key={idx}>
                          <span>{obj.name}</span>{" "}
                          <CheckRoundedIcon sx={{ color: "primary.main" }} />
                        </li>
                      )
                  )}
              </ul>
            </Box>
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
      </Container>
    </section>
  );
};

export default RegistrationSwiper;
