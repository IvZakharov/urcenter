import { MainLayout } from '../layouts/MainLayout';

import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import ServicesHero from '../components/ServicesHero/ServicesHero';
import { fetchAPI } from '../lib/api';

const Contacts = ({ info, categories }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  const matchesLg = useMediaQuery('(min-width: 1200px)');
  return (
    <MainLayout
      categories={categories}
      info={info}
      metaTitle={'Контакты'}
      metaDescription={'Юр юр юр '}>
      <Container>
        <Box mb={matches ? 20 : 12}>
          <ServicesHero title={'Контакты'} />
        </Box>
      </Container>
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
    revalidate: 1,
  };
}

export default Contacts;
