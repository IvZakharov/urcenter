import styles from './NoteSection.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box } from '@mui/material';
import yesImage from './img/yes.svg';
import noImage from './img/no.svg';
import Image from 'next/image';

const NoteSection = ({ description, image }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className={styles.noteSection}>
      <Container>
        <Grid container sx={{ alignItems: 'center' }} spacing={matches ? 12 : 3}>
          <Grid item xs={12} md={9} lg={6}>
            <h2 className={styles.title}>ПРИМЕЧАНИЕ:</h2>
            {!matches && (
              <Box mb={3} className={styles.imgWrap}>
                <Image src={image ? yesImage : noImage} />
              </Box>
            )}
            <p className={styles.description}>{description}</p>
          </Grid>
          <Grid item xs={12} md={3} lg={6}>
            {matches && (
              <Box mb={3} className={styles.imgWrap}>
                <Image src={image ? yesImage : noImage} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default NoteSection;
