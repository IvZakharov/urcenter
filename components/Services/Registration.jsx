import styles from "./Services.module.scss";
import React from "react";

import { useMediaQuery, Container, Grid, Button, Box } from "@mui/material";
import Image from "next/image";
import servicesImage from "./img/3.svg";

const Registration = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Box component={"section"} className={styles.section}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={6} lg={5}>
            <h3 className={styles.subtitle}>УСЛУГИ ЦЕНТРА</h3>
            <h2 className={styles.title}>РЕГИСТРАЦИЯ</h2>
            <ul className={styles.registrationList}>
              <li>ИП</li>
              <li className={styles.dot}></li>
              <li>ООО</li>
              <li className={styles.dot}></li>
              <li>АО</li>
              <li className={styles.dot}></li>
              <li>ПАО</li>
              <li className={styles.dot}></li>
              <li>НКО</li>
            </ul>
            <p className={styles.text}>
              Мы заполним заявления, подадим в налоговую и выдадим документы на
              руки за 14 дней.
            </p>
            <a href={"#form"}>
              <Button style={{ width: matches ? "auto" : "100%" }}>
                Узнать подробнее
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.img}>
              <Image src={servicesImage} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Registration;
