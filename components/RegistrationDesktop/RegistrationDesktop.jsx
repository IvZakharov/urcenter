import styles from "./RegistrationDesktop.module.scss";
import React from "react";
import {
  useMediaQuery,
  Container,
  Grid,
  Box,
  Button,
  Typography,
} from "@mui/material";

import RegistrationTable from "../RegistrationTable/RegistrationTable";
const RegistrationDesktop = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [tabActive, setTabActive] = React.useState(0);
  const tabs = ["ИП", "ООО", "АО", "ПАО", "НКО"];

  const handleTabClick = (event) => {
    const item = event.currentTarget.tabIndex;
    setTabActive(item);
  };

  return (
    <section className={styles.registrationDesktop}>
      <Container>
        <Box component={"ul"} className={styles.tabs}>
          {tabs.map((item, idx) => (
            <li key={idx}>
              <Button
                variant="text"
                tabIndex={idx}
                onClick={(event) => handleTabClick(event)}
                className={tabActive === idx ? styles.active : ""}
              >
                {item}
              </Button>
            </li>
          ))}
        </Box>

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
        <RegistrationTable />
      </Container>
    </section>
  );
};

export default RegistrationDesktop;
