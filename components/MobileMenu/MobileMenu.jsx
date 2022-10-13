import styles from './MobileMenu.module.scss';
import React from 'react';
import logoSvg from './img/logo.svg';
import { Dialog, useMediaQuery, Box, Slide, IconButton } from '@mui/material';
import Image from 'next/image';
import ContactsInfo from '../ContactsInfo/ContactsInfo';
import MobileNav from '../Nav/MobileNav';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MobileMenu = ({ onClickClose, open, categories, info }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Dialog
      fullScreen
      open={open}
      sx={{ width: matches ? '640px' : '320px', left: 'inherit' }}
      onClose={onClickClose}
      TransitionComponent={Transition}>
      <Box padding={2}>
        <Box
          mb={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image src={logoSvg} />
          <IconButton onClick={onClickClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box mb={3}>
          {' '}
          <MobileNav onClickClose={onClickClose} categories={categories} />
        </Box>
        <ContactsInfo info={info} email address phone />
      </Box>
    </Dialog>
  );
};

export default MobileMenu;
