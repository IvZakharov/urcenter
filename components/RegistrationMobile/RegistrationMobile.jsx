import styles from "./RegistrationMobile.module.scss";
import React from "react";
import { Container, Box, Typography } from "@mui/material";

import RegistrationSwiper from "../RegistrationSwiper/RegistrationSwiper";
const RegistrationMobile = ({
  text,
  economyPrice,
  standartPrice,
  fullPrice,
  tableRows,
}) => {
  return (
    <section className={styles.registrationMobile}>
      <Container>
        <Box mb={5} padding={"20px 50px 0 0"}>
          <Typography
            mb={3}
            sx={{ fontWeight: 500, fontSize: 18, color: "primary.main" }}
          >
            В МОСКВЕ “ПОД КЛЮЧ”
          </Typography>
          <Typography fontSize={20}>{text}</Typography>
        </Box>
      </Container>
      <RegistrationSwiper
        economyPrice={economyPrice}
        standartPrice={standartPrice}
        fullPrice={fullPrice}
        tableRows={tableRows}
      />
    </section>
  );
};

export default RegistrationMobile;
