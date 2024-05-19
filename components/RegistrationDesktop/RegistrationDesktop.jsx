import styles from "./RegistrationDesktop.module.scss";
import React from "react";
import { useMediaQuery, Container, Box, Typography } from "@mui/material";

import RegistrationTable from "../RegistrationTable/RegistrationTable";
const RegistrationDesktop = ({
  text,
  economyPrice,
  standartPrice,
  fullPrice,
  tableRows,
}) => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <section className={styles.registrationDesktop}>
      <Container>
        <Box mb={5} padding={"20px 50px 0 0"}>
          <Typography
            mb={3}
            sx={{ fontWeight: 500, fontSize: 18, color: "primary.main" }}
          >
            В МОСКВЕ “ПОД КЛЮЧ”
          </Typography>
          <Typography sx={{ maxWidth: matches ? "50%" : "auto" }} fontSize={20}>
            {text}
          </Typography>
        </Box>
        <RegistrationTable
          economyPrice={economyPrice}
          standartPrice={standartPrice}
          fullPrice={fullPrice}
          tableRows={tableRows}
        />
      </Container>
    </section>
  );
};

export default RegistrationDesktop;
