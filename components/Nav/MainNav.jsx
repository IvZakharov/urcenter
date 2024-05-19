import styles from "./Nav.module.scss";
import React from "react";
import {
  useMediaQuery,
  Container,
  Grid,
  Box,
  Button,
  IconButton,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const MainNav = ({ menus }) => {
  const [submenuIsOpen, setSubmenuIsOpen] = React.useState(false);

  console.log(menus);

  return (
    <nav className={styles.mainNav}>
      <ul>
        <li className={styles.dropdown}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => setSubmenuIsOpen(!submenuIsOpen)}
          >
            <span className={styles.fs14}>УСЛУГИ ЦЕНТРА</span>
            <KeyboardArrowDownIcon />
          </Box>

          {submenuIsOpen && (
            <Box className={styles.submenu}>
              <Container>
                <Grid container spacing={6} maxWidth={"800px"}>
                  {menus &&
                    menus.map((menu) => (
                      <Grid item xs={12} md={6} key={menu._uid}>
                        <h4>{menu?.title}</h4>
                        <ul>
                          {menu?.links &&
                            menu?.links.map((link) => (
                              <li
                                key={link._uid}
                                onClick={() => setSubmenuIsOpen(false)}
                              >
                                <Link href={`/${link.link.cached_url}`}>
                                  <a>{link.label}</a>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </Grid>
                    ))}
                </Grid>
              </Container>
            </Box>
          )}
        </li>
        <li>
          <Link href={"/contacts"}>
            <a className={styles.fs14}>КОНТАКТЫ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
