import styles from "./BenefitSection.module.scss";
import React from "react";
import imageSvg from "./img/img.svg";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";
import Image from "next/image";

const BenefitSection = ({ blok }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  const { text } = blok;

  return (
    <section className={styles.benefitSection}>
      <Container>
        <Grid container spacing={matches ? 20 : 6}>
          <Grid item xs={12} md={6}>
            <h2 className={styles.title}>Ваша выгода</h2>

            <p className={styles.description}>{text}</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.imgWrap}>
              <Image src={imageSvg} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BenefitSection;
