import styles from './Services.module.scss';
import React from 'react';
import Basic from './Basic';
import Changes from './Changes';
import Registration from './Registration';
import { useMediaQuery, Container, Grid, Button, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Liquidation from './Liquidation';

const ServicesMain = ({ categories }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesList, setCategoriesList] = React.useState();

  React.useEffect(() => {
    const basic = categories.find((obj) => obj.attributes.name === 'Основные услуги');
    const changes = categories.find((obj) => obj.attributes.name === 'Внесение изменений');
    const liquidation = categories.find((obj) => obj.attributes.name === 'Ликвидация');

    setCategoriesList({
      basic: basic.attributes.pages.data,
      changes: changes.attributes.pages.data,
      liquidation: liquidation.attributes.pages.data,
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
          className={styles.servicesSwiper}>
          <SwiperSlide>
            <Basic servicesList={!isLoading ? categoriesList.basic : null} />
          </SwiperSlide>
          <SwiperSlide>
            <Changes servicesList={!isLoading ? categoriesList.changes : null} />
          </SwiperSlide>
          <SwiperSlide>
            <Registration />
          </SwiperSlide>
          <SwiperSlide>
            <Liquidation servicesList={!isLoading ? categoriesList.liquidation : null} />
          </SwiperSlide>
          <IconButton className={styles.arrowPrev} ref={arrowPrev}>
            <ArrowLeftIcon sx={{ color: 'primary.main' }} fontSize={'large'} />
          </IconButton>
          <IconButton className={styles.arrowNext} ref={arrowNext}>
            <ArrowLeftIcon
              sx={{ color: 'primary.main', transform: 'rotate(180deg)' }}
              fontSize={'large'}
            />
          </IconButton>
        </Swiper>
      ) : (
        <>
          <Basic servicesList={!isLoading ? categoriesList.basic : null} />
          <Changes servicesList={!isLoading ? categoriesList.changes : null} />
          <Registration />
          <Liquidation servicesList={!isLoading ? categoriesList.liquidation : null} />
        </>
      )}
    </section>
  );
};

export default ServicesMain;
