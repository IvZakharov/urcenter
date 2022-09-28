import styles from "./SituationsSection.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box } from "@mui/material";

const SituationsSection = ({ title, description, subtitle, list }) => {
  const matches = useMediaQuery("(min-width: 1200px)");

  console.log(list);

  return (
    <section className={styles.situations}>
      <Container>
        <Grid
          container
          spacing={matches ? 10 : 3}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6} lg={5}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={styles.subtitle}>{subtitle}</h3>

            <ul className={styles.list}>
              {list && list.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SituationsSection;
