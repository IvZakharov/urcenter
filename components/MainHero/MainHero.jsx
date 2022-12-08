import styles from "./MainHero.module.scss";
import React from "react";
import heroImg from "./img/hero.svg";
import { useMediaQuery, Container, Grid, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MainHero = () => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.mainHero}>
      <Container sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }} alignItems={"center"}>
          <Grid item xs={12} lg={7}>
            <Box className={styles.inner}>
              <h1 className={styles.title}>Нотариальное заверение сделок</h1>
              <p className={styles.text}>
                Оставьте заявку и мы предложим лучшее решение вашего вопроса
              </p>
              <Box mb={5} sx={{ order: matchesLg ? 0 : 1 }}>
                <Link href={"/#form"} scroll={false}>
                  <a>
                    <Button variant="contained">Получить консультацию</Button>
                  </a>
                </Link>
              </Box>
              <ul className={styles.advantages}>
                <li>
                  <i>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_149_14)">
                        <path
                          d="M1.21875 6L6.375 11L16.6875 1"
                          stroke="#5A37BD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_149_14">
                          <rect width="18" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p>Работаем с 2014 года</p>
                </li>
                <li>
                  <i>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_149_14)">
                        <path
                          d="M1.21875 6L6.375 11L16.6875 1"
                          stroke="#5A37BD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_149_14">
                          <rect width="18" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p>Быстро и качественно</p>
                </li>

                <li>
                  <i>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_149_14)">
                        <path
                          d="M1.21875 6L6.375 11L16.6875 1"
                          stroke="#5A37BD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_149_14">
                          <rect width="18" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p>Широкий спектр услуг</p>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box className={styles.img}>
              <Image src={heroImg} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MainHero;
