import styles from './Nav.module.scss';
import React from 'react';
import { useMediaQuery, Container, Grid, Box, Button, IconButton } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const MainNav = ({ categories }) => {
  const matches = useMediaQuery('(min-width: 1200px)');
  const [submenuIsOpen, setSubmenuIsOpen] = React.useState(false);
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li className={styles.dropdown}>
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => setSubmenuIsOpen(!submenuIsOpen)}>
            <span>УСЛУГИ ЦЕНТРА</span>
            <KeyboardArrowDownIcon />
          </Box>

          {submenuIsOpen && (
            <Box className={styles.submenu}>
              <Container>
                <Grid container spacing={6} maxWidth={'800px'}>
                  {categories &&
                    categories.map((page) => (
                      <Grid item xs={12} md={6} key={page.attributes?.name}>
                        <h4>{page.attributes?.name}</h4>
                        <ul>
                          {page.attributes?.pages.data &&
                            page.attributes?.pages.data
                              .sort((a, b) => (a.attributes?.title > b.attributes?.title ? 1 : -1))
                              .map((item, idx) => (
                                <li key={idx} onClick={() => setSubmenuIsOpen(false)}>
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
          )}
        </li>
        <li>
          <Link href={'/contacts'}>
            <a>КОНТАКТЫ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
