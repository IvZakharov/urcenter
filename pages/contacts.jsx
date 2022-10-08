import { MainLayout } from '../layouts/MainLayout';
import ContactsInfo from '../components/ContactsInfo/ContactsInfo';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import MainHero from '../components/MainHero/MainHero';
import Services from '../components/Services';
import LetsTalk from '../components/LetsTalk/LetsTalk';

export default function Home() {
  const matches = useMediaQuery('(min-width: 768px)');
  const matchesLg = useMediaQuery('(min-width: 1200px)');
  return (
    <MainLayout metaTitle={'Главаная'} metaDescription={'Юр юр юр '}>
      <Container>
        <h1>Contacts</h1>
      </Container>
    </MainLayout>
  );
}
