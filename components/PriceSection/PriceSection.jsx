import styles from './PriceSection.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box, Button } from '@mui/material';

const PriceSection = ({ title, price, description, subtitle, list }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className={styles.priceSection}>
      <Container>
        <Grid container spacing={matches ? 6 : 3}>
          <Grid item xs={12} md={6}>
            <h2 className={styles.title}>{title}</h2>

            {price &&
              price.map((obj, idx) => (
                <Box key={idx} mb={2}>
                  <p className={styles.price}>
                    <small>от</small> {obj.price} <span> ₽</span>
                  </p>
                  <p className={styles.description}>{obj.text}</p>
                </Box>
              ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <ul className={styles.list}>
              {list && list.map((obj, idx) => <li key={idx}>{obj.item}</li>)}
            </ul>
            {!matches && (
              <Button
                sx={{
                  width: '100%',
                  backgroundColor: '#fff',
                  color: 'primary.main',
                  fontSize: 16,
                  ':hover': {
                    backgroundColor: '#e1e1e1',
                  },
                }}>
                Заказать услугу
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PriceSection;
