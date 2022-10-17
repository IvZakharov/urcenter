import { MainLayout } from '../layouts/MainLayout';
import axios from 'axios';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import MainHero from '../components/MainHero/MainHero';
import Services from '../components/Services';
import LetsTalk from '../components/LetsTalk/LetsTalk';
import { fetchAPI } from '../lib/api';

const Home = ({ info, categories }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  const matchesLg = useMediaQuery('(min-width: 1200px)');

  return (
    <MainLayout categories={categories} info={info} metaTitle={'Главаная'} metaDescription={''}>
      <Container>
        {/* {!matches && (
          <Box sx={{ maxWidth: '70%' }} mt={3}>
            <ContactsInfo address phone />
          </Box>
        )} */}
      </Container>
      <Box paddingY={matches ? 6 : 3}></Box>
      <MainHero />
      <Box component={'section'} sx={{ paddingY: 10, paddingX: matchesLg ? 35 : 2 }}>
        <Container>
          <Typography
            variant={'body1'}
            sx={{
              fontSize: matches ? 32 : 20,
              lineHeight: 1.5,
              textAlign: matches ? 'center' : 'left',
            }}>
            <Typography variant={'inherit'} component="span" color={'primary.main'}>
              Юридический центр г. Москвы
            </Typography>{' '}
            в Скатертном переулке, дом 5 работает с 1998 г. и надёжно помогает своим клиентам в
            юридических вопросах.
          </Typography>
        </Container>
      </Box>
      <Services categories={categories} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [infoRes, categoriesRes] = await Promise.all([
    fetchAPI('/info'),
    fetchAPI('/categories', { populate: 'deep' }),
  ]);

  return {
    props: {
      info: infoRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 10,
  };
}

export default Home;
