import styles from './ResultSection.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box, Button } from '@mui/material';
import Image from 'next/image';
import imageSvg from './img/1.svg';

const ResultSection = ({ description }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className={styles.resultSection}>
      <Container>
        <Box className={styles.inner}>
          <Box maxWidth={400} margin={matches ? 0 : '0 auto'}>
            <h2 className={styles.title}>РЕЗУЛЬТАТ:</h2>
            <p className={styles.description}>{description}</p>
          </Box>
          <Box className={styles.imgWrap}>
            <Image src={imageSvg} width={170} height={170} />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ResultSection;
