import styles from './LetsTalk.module.scss';
import React from 'react';
import imageSvg from './img/img.svg';
import { useMediaQuery, Container, Grid, Button, Box, TextField } from '@mui/material';
import Image from 'next/image';
const LetsTalk = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className={styles.letsTalk} id="form">
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6} lg={5} order={matches ? 1 : 0}>
            <Box className={styles.imgWrap}>
              <Image src={imageSvg} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7} order={matches ? 0 : 1}>
            <h2 className={styles.title}>ЗАКАЖИТЕ УСЛУГУ НА НАШЕМ САЙТЕ</h2>
            <p className={styles.text}>
              Воспользуйтесь услугой нашего юридического центра сейчас, и вы сэкономите свое время,
              деньги и нервы.
            </p>
            <Box component="form" noValidate autoComplete="off" className={styles.form}>
              <Box className={styles.field}>
                <label htmlFor="userName">Ваше имя:</label>
                <input type="text" id="userName" name="userName" />
              </Box>
              <Box className={styles.field}>
                <label htmlFor="userTel">Телефон:</label>
                <input type="tel" id="userTel" name="userTel" />
              </Box>

              <Box className={styles.field}>
                <Button
                  sx={{
                    width: matches ? 'auto' : '100%',
                    backgroundColor: '#fff',
                    color: 'primary.main',
                    fontSize: 16,
                    ':hover': {
                      backgroundColor: '#e1e1e1',
                    },
                  }}>
                  Отправить заявку
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LetsTalk;
