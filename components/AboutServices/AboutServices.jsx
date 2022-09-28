import styles from "./AboutServices.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid } from "@mui/material";

const AboutServices = ({ title }) => {
  const matches = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.servicesHero}>
      <Container>
        <h2 className={styles.title}>Об услуге</h2>
        <Grid container spacing={matches ? 26 : 3}>
          <Grid item xs={12} md={6}>
            <p className={styles.text}>
              Обеспечение доказательств, путем заверения электронных страниц с
              сети Интернет, является важной юридической процедурой по защите
              законных прав и интересов физических и юридических лиц в суде.
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
            <p className={styles.text}>
              Электронная переписка сегодня - наиболее актуальный способ
              передачи информации и общения не только личного характера, а также
              считается одним из ключевых инструментов в деловых отношениях.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutServices;
