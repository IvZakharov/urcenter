import styles from "./WhatNeedsSection.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";
import Image from "next/image";
import imageSvg from "./img/1.svg";

const WhatNeedsSection = ({ items }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className={styles.whatNeedsSection}>
      <Container>
        <h2 className={styles.title}>Что от вас потребуется?</h2>
        <Grid container spacing={6} justifyContent={"center"}>
          {items &&
            items.map((item, idx) => (
              <Grid key={idx} item xs={8} md={4} lg={3}>
                <Box className={styles.item}>
                  <spa>{idx + 1}</spa>
                  <h3>{item}</h3>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhatNeedsSection;
