import styles from './Nav.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box, Button } from '@mui/material';
import registrationLinks from '../../data/registrationLinks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const MainNav = ({ categories }) => {
  const matches = useMediaQuery('(min-width: 1200px)');

  return (
    <nav className={styles.mainNav}>
      <ul>
        <li className={styles.dropdown}>
          <a>Услуги центра {matches && <KeyboardArrowDownIcon />}</a>
          <Box className={styles.submenu}>
            <Container>
              <Grid container spacing={6} maxWidth={'800px'}>
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

                {categories &&
                  categories.map((page) => (
                    <Grid item xs={12} md={6} key={page.attributes?.name}>
                      <h4>{page.attributes?.name}</h4>
                      <ul>
                        {page.attributes?.pages.data &&
                          page.attributes?.pages.data.map((item, idx) => (
                            <li key={idx}>
                              <Link href={`/services/${item.attributes?.slug}`}>
                                <a>{item.attributes?.title}</a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </Box>
        </li>
        <li>
          <Link href={'/contacts'}>
            <a>Контакты</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
