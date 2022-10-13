import styles from './SituationsSection.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box } from '@mui/material';

const SituationsSection = ({ title, description, subtitle, rightList, leftList }) => {
  const matches = useMediaQuery('(min-width: 1200px)');

  return (
    <section className={styles.situations}>
      <Container>
        <Grid container spacing={matches ? 10 : 3} justifyContent={'space-between'}>
          <Grid item xs={12} md={6} lg={5}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <ul className={styles.leftList}>
              {leftList
                ? leftList.map((obj, idx) => (
                    <li key={idx}>
                      <h3>{obj.title}</h3> <p>{obj.text}</p>{' '}
                    </li>
                  ))
                : null}
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={styles.subtitle}>{subtitle}</h3>

            <ul className={styles.rightList}>
              {rightList && rightList.map((obj, idx) => <li key={idx}>{obj.item}</li>)}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SituationsSection;
