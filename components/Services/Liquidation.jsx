import styles from "./Services.module.scss";
import React from "react";

import { useMediaQuery, Container, Grid, Button, Box } from "@mui/material";
import Image from "next/image";
import servicesImage from "./img/2.svg";

const Liquidation = ({ servicesList }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Box component={"section"} className={styles.section}>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.img}>
              <Image src={servicesImage} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <h3 className={styles.subtitle}>УСЛУГИ ЦЕНТРА</h3>
            <h2 className={styles.title}>ЛИКВИДАЦИЯ</h2>
            <ul className={styles.list}>
              {servicesList.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
            {!matches && (
              <a href={"#form"}>
                <Button style={{ width: "100%" }}>Узнать подробнее</Button>
              </a>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Liquidation;
