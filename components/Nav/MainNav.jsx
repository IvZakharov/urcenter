import styles from "./Nav.module.scss";
import React from "react";
import { useMediaQuery, Container, Grid, Box, Button } from "@mui/material";
import permalinks from "../../data/permalinks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainNav = () => {
  const matches = useMediaQuery("(min-width: 1200px)");

  return (
    <nav className={styles.mainNav}>
      <ul>
        <li className={styles.dropdown}>
          <a> Услуги центра {matches && <KeyboardArrowDownIcon />}</a>
          <Box className={styles.submenu}>
            <Container>
              <Grid container spacing={6} maxWidth={"800px"}>
                {permalinks.map((obj, idx) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <h4>{obj.category}</h4>
                    <ul>
                      {obj.pages.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </li>
        <li>
          <a>Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
