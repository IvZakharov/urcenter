import styles from "./ServicesHero.module.scss";
import React from "react";
import { useMediaQuery, Container } from "@mui/material";

const ServicesHero = ({ title }) => {
  return (
    <section className={styles.servicesHero}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
      </Container>
    </section>
  );
};

export default ServicesHero;
