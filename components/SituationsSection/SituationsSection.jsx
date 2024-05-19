import styles from "./SituationsSection.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box } from "@mui/material";

const SituationsSection = ({ blok }) => {
  const matches = useMediaQuery("(min-width: 1200px)");
  const { title, text, leftList, rightListTitle, rightList } = blok;

  return (
    <section className={styles.situations}>
      <Container>
        <Grid
          container
          spacing={matches ? 10 : 0}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6} lg={5}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{text}</p>

            <ul className={styles.leftList}>
              {leftList
                ? leftList.map((obj) => (
                    <li key={obj._uid}>
                      <h3>{obj.title}</h3> <p>{obj.text}</p>{" "}
                    </li>
                  ))
                : null}
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={styles.subtitle}>{rightListTitle}</h3>

            <ul className={styles.rightList}>
              {rightList &&
                rightList.map((obj) => <li key={obj._uid}>{obj.text}</li>)}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SituationsSection;
