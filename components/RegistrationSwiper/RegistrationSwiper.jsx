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

const RegistrationSwiper = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  const data = [
    {
      name: "Эконом",
      price: "5000",
      includes: [
        "Консультация специалиста по регистрации нового ООО/внесению изменений;",
        "Подготовка всех необходимых документов для первичной регистрации ООО (внесения изменений);",
        "Подготовка заявлений для государственной регистрации (внесение изменений)",
      ],
    },
    {
      name: "СТАНДАРТ",
      price: "8000",
      includes: [
        "Консультация специалиста по регистрации нового ООО/внесению изменений;",
        "Подготовка всех необходимых документов для первичной регистрации ООО (внесения изменений);",
        "Подготовка заявлений для государственной регистрации (внесение изменений);",
        "Сопровождение нотариального заверения подписи на заявлениях для регистрации (БЕЗ ОЧЕРЕДИ);",
        "Подача документов в МИФНС № 46 по г. Москве;",
        "Изготовление печати",
      ],
    },
    {
      name: "ПОЛНЫЙ",
      price: "12000",
      includes: [
        "Консультация специалиста по регистрации нового ООО/внесению изменений;",
        "Подготовка всех необходимых документов для первичной регистрации ООО (внесения изменений);",
        "Подготовка заявлений для государственной регистрации (внесение изменений);",
        "Сопровождение нотариального заверения подписи на заявлениях для регистрации (БЕЗ ОЧЕРЕДИ);",
        "Подача документов в МИФНС № 46 по г. Москве;",
        "Изготовление печати",
        "Получение письма о присвоении кодов статистики в Госкомстате;",
        "Получение извещения страхователя из Пенсионного фонда;",
        "Получение извещения страхователя из фонда социального страхования;",
        "Доставка зарегистрированных документов клиенту (в пределах МКАД)",
      ],
    },
  ];

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
          {data.map((obj, idx) => (
            <SwiperSlide key={idx}>
              <Box className={styles.item}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 className={styles.title}>{obj.name}</h2>
                  <span className={styles.price}>{obj.price} ₽</span>
                </Box>

                <ul className={styles.list}>
                  {obj.includes.map((item, idx) => (
                    <li key={idx}>
                      <span>{item}</span>{" "}
                      <CheckRoundedIcon sx={{ color: "primary.main" }} />
                    </li>
                  ))}
                </ul>
              </Box>
            </SwiperSlide>
          ))}

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
