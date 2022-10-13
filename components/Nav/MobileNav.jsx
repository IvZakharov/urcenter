import styles from './Nav.module.scss';
import React from 'react';
import { useMediaQuery, Grid, Box } from '@mui/material';
import Link from 'next/link';

const MobileNav = ({ onClickClose, categories }) => {
  const matches = useMediaQuery('(min-width: 1200px)');

  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <span>Услуги центра </span>
          <Box className={styles.submenu}>
            <Grid container spacing={2}>
              {categories &&
                categories.map((page) => (
                  <Grid item xs={12} md={6} key={page.attributes?.name}>
                    <h4>{page.attributes?.name}</h4>
                    <ul>
                      {page.attributes?.pages.data &&
                        page.attributes?.pages.data
                          .sort((a, b) => (a.attributes?.title > b.attributes?.title ? 1 : -1))
                          .map((item, idx) => (
                            <li key={idx} onClick={onClickClose}>
                              <Link href={`/services/${item.attributes?.slug}`}>
                                <a>{item.attributes?.title}</a>
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
          <Link href={'/contacts'}>
            <a>Контакты</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
