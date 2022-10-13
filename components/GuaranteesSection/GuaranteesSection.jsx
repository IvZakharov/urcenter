import styles from './GuaranteesSection.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box, Button } from '@mui/material';
import Image from 'next/image';
import svgIcon1 from './img/1.svg';
import svgIcon2 from './img/2.svg';
import svgIcon3 from './img/3.svg';
import svgIcon4 from './img/4.svg';

const GuaranteesSection = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className={styles.guaranteesSection}>
      <Container>
        <h2 className={styles.title}>Наши гарантии:</h2>
        <Grid container spacing={matches ? 6 : 5}>
          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.item}>
              <Image src={svgIcon1} width={matches ? 70 : 60} height={matches ? 70 : 60} />
              <h4>
                Юридическая <br /> консультация
              </h4>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.item}>
              <Image src={svgIcon2} width={matches ? 70 : 60} height={matches ? 70 : 60} />
              <h4>
                Приём по записи <br /> без очередей
              </h4>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.item}>
              <Image src={svgIcon3} width={matches ? 70 : 60} height={matches ? 70 : 60} />
              <h4>
                Проведение проверки <br /> ваших доказательств
              </h4>
            </Box>
          </Grid>{' '}
          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.item}>
              <Image src={svgIcon4} width={matches ? 70 : 60} height={matches ? 70 : 60} />
              <h4>
                Преимущество <br /> в суде
              </h4>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default GuaranteesSection;
