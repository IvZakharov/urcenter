import styles from "./WhatNeedsSection.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";

const WhatNeedsSection = ({ blok }) => {
  const { title, text, list } = blok;

  return (
    <section className={styles.whatNeedsSection}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Grid container spacing={6}>
          {list &&
            list.map((obj, idx) => (
              <Grid key={idx} item xs={12} md={6} lg={4}>
                <Box className={styles.item}>
                  <h3>{obj.title}</h3>
                  <p>{obj.text}</p>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhatNeedsSection;
