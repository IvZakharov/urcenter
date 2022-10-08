import styles from './Header.module.scss';
import React from 'react';
import logoSvg from './img/logo.svg';
import { Container, IconButton, useMediaQuery, Box } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';
import ContactsInfo from '../ContactsInfo/ContactsInfo';
import MainNav from '../Nav/MainNav';
import Link from 'next/link';

const Header = ({ onClickOpen, categories, info }) => {
  const matchesLg = useMediaQuery('(min-width: 1200px)');
  const materialStyles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '15px 0',
    },
  };

  return (
    <header className={styles.header}>
      <Container>
        <Box sx={materialStyles.wrapper}>
          <Box className={styles.logo}>
            <Link href={'/'}>
              <a>
                <Image src={logoSvg} width={291} height={40} />
              </a>
            </Link>
          </Box>

          {!matchesLg && (
            <IconButton onClick={onClickOpen}>
              <MenuRoundedIcon fontSize="large" sx={{ color: '#000' }} />
            </IconButton>
          )}
          {matchesLg && <MainNav categories={categories} />}
          {matchesLg && <ContactsInfo info={info} address phone align={'right'} />}
        </Box>
      </Container>
    </header>
  );
};

export default Header;
