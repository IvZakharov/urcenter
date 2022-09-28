import styles from "./BenefitSection.module.scss";
import React from "react";
import imageSvg from "./img/img.svg";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";
import Image from "next/image";

const BenefitSection = ({ description }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className={styles.benefitSection}>
      <Container>
        <Grid container spacing={matches ? 6 : 3}>
          <Grid item xs={12} md={6}>
            <h2 className={styles.title}>Ваша выгода</h2>

            <p className={styles.description}>
              Если вы боитесь, что ваши доказательства могут быть уничтожены,
              искажены или не предоставлены по непредвиденным обстоятельствам в
              суд, то обеспечьте свою безопасность заранее. <br />В данной
              ситуации время играет не в вашу пользу, в любой момент ваши
              доказательства могут потерять свою законную силу, и тогда вы не
              сможете предоставить их в суде, при этом проиграв дело и не
              компенсировав понесенного ущерба.
            </p>
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
