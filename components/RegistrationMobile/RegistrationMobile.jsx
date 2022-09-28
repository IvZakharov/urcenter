import styles from "./RegistrationMobile.module.scss";
import React from "react";
import {
  useMediaQuery,
  Container,
  Grid,
  Box,
  Button,
  Typography,
} from "@mui/material";
import Dropdown from "../Ui/Dropdown";
import RegistrationSwiper from "../RegistrationSwiper/RegistrationSwiper";
const RegistrationMobile = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className={styles.registrationMobile}>
      <Container>
        <Dropdown dropdownList={["ИП", "ООО", "АО", "ПАО", "НКО"]} />
        <Box mb={5} padding={"20px 50px 0 0"}>
          <Typography
            mb={3}
            sx={{ fontWeight: 500, fontSize: 18, color: "primary.main" }}
          >
            В МОСКВЕ “ПОД КЛЮЧ”
          </Typography>
          <Typography fontSize={20}>
            В нашем юридическом центре мы оказываем услуги по подготовке
            документов и регистрации ООО.{" "}
          </Typography>
        </Box>
      </Container>
      <RegistrationSwiper />
    </section>
  );
};

export default RegistrationMobile;
