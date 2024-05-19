import styles from "./AboutServices.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid } from "@mui/material";

const AboutServices = ({ blok }) => {
  const matches = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.servicesHero}>
      <Container>
        <h2 className={styles.title}>Об услуге</h2>

        {blok.columns && (
          <Grid container spacing={matches ? 26 : 3}>
            {blok.columns.map((column) => (
              <Grid item xs={12} md={6} key={column._uid}>
                <p className={styles.text}>{column?.text}</p>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default AboutServices;
