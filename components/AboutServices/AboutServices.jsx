import styles from './AboutServices.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid } from '@mui/material';

const AboutServices = ({ columnOne, columnTwo }) => {
  const matches = useMediaQuery('(min-width: 1200px)');

  return (
    <section className={styles.servicesHero}>
      <Container>
        <h2 className={styles.title}>Об услуге</h2>
        <Grid container spacing={matches ? 26 : 3}>
          <Grid item xs={12} md={6}>
            <p className={styles.text}>{columnOne}</p>
          </Grid>

          <Grid item xs={12} md={6}>
            <p className={styles.text}>{columnTwo}</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutServices;
