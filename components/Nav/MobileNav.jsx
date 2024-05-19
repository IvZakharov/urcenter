import styles from "./Nav.module.scss";
import React from "react";
import { Grid, Box } from "@mui/material";
import Link from "next/link";

const MobileNav = ({ onClickClose, menus }) => {
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <span>Услуги центра </span>
          <Box className={styles.submenu}>
            <Grid container spacing={2}>
              {menus &&
                menus.map((menu) => (
                  <Grid item xs={12} md={6} key={menu._uid}>
                    <h4>{menu?.title}</h4>
                    <ul>
                      {menu?.links &&
                        menu?.links.map((link) => (
                          <li key={link._uid} onClick={onClickClose}>
                            <Link href={`/${link.link.cached_url}`}>
                              <a>{link.label}</a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </li>
        <li>
          <Link href={"/contacts"}>
            <a>КОНТАКТЫ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
