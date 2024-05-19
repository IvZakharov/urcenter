import styles from "./PriceSection.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const PriceSection = ({ blok }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const { price, listTitle, list } = blok;

  return (
    <section className={styles.priceSection}>
      <Container>
        <Grid container spacing={{ xs: 3, md: 6 }}>
          <Grid item xs={12} md={6}>
            <h2 className={styles.title}>Стоимость услуги</h2>

            {price &&
              price.map((obj, idx) => (
                <Box key={idx} mb={2}>
                  <p className={styles.price}>
                    <small>от</small> {obj.price} <span> ₽</span>
                  </p>
                  <p className={styles.description}>{obj.text}</p>
                </Box>
              ))}
            {matches && (
              <Link href={`${router.asPath}/#form`}>
                <a>
                  <Button
                    sx={{
                      width: { xs: "100%", md: "auto" },
                      backgroundColor: "primary.main",
                      color: "#fff",
                      fontSize: 16,
                      // ":hover": {
                      //   backgroundColor: "#e1e1e1",
                      // },
                    }}
                  >
                    Заказать услугу
                  </Button>
                </a>
              </Link>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={styles.subtitle}>{listTitle}</h3>
            <ul className={styles.list}>
              {list && list.map((obj, idx) => <li key={idx}>{obj.text}</li>)}
            </ul>
            {!matches && (
              <Link href={`${router.asPath}/#form`}>
                <a>
                  <Button
                    sx={{
                      width: "100%",
                      backgroundColor: "primary.main",
                      color: "white",
                      fontSize: 16,
                      // ":hover": {
                      //   backgroundColor: "#e1e1e1",
                      // },
                    }}
                  >
                    Заказать услугу
                  </Button>
                </a>
              </Link>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PriceSection;
