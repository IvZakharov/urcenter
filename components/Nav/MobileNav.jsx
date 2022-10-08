import styles from './Nav.module.scss';
import React from 'react';
import { useMediaQuery, Grid, Box } from '@mui/material';
import registrationLinks from '../../data/registrationLinks';

const MainNav = () => {
  const matches = useMediaQuery('(min-width: 1200px)');

  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <a> Услуги центра </a>
          <Box className={styles.submenu}>
            <Grid container spacing={2}>
              {registrationLinks.map((obj, idx) => (
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
