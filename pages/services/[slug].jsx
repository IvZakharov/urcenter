import { MainLayout } from '../../layouts/MainLayout';
import ServicesHero from '../../components/ServicesHero/ServicesHero';
import { useMediaQuery, Container, Grid, Button, Box } from '@mui/material';
import AboutServices from '../../components/AboutServices/AboutServices';
import NoteSection from '../../components/NoteSection/NoteSection';
import SituationsSection from '../../components/SituationsSection/SituationsSection';
import PriceSection from '../../components/PriceSection/PriceSection';
import GuaranteesSection from '../../components/GuaranteesSection/GuaranteesSection';
import ResultSection from '../../components/ResultSection/ResultSection';
import WhatNeedsSection from '../../components/WhatNeedsSection/WhatNeedsSection';
import { fetchAPI } from '../../lib/api';

const Page = ({ page, categories, info }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  const featuresArr = [
    'Брачный договор регулирует режим собственности на имущество супругов как на уже имеющееся, так и на то имущество, которое будет приобретено и включено в совместно нажитое имущество',
    'Брачный договор составляется в письменном виде и удостоверяется нотариусом. При заключении соглашения между мужчиной и женщиной до вступления в брак, в законную силу соглашение вступает со дня регистрации брака',
    'Брачный договор можно расторгнуть в любой момент по обоюдному соглашению супругов',
  ];

  const priceArr = [
    'консультацию юриста, разъяснение супругам об их правах и обязанностях, значение и смысл договора',
    'определение основных пунктов брачного соглашения',
    'составление соглашения',
  ];

  const whatNeedArr = ['Оставить заявку на сайте', 'Прийти с документами в назначенное время'];

  console.log(page);

  return (
    <MainLayout
      categories={categories}
      info={info}
      metaTitle={'Брачный договор'}
      metaDescription={'Брачный договор'}>
      <Box mb={matches ? 20 : 12}>
        <ServicesHero title={'Брачный договор'} />
      </Box>
      <Box mb={matches ? 10 : 8}>
        {' '}
        <AboutServices />
      </Box>

      <NoteSection
        description={
          'Никто не застрахован от развода, но важно предупредить нежелательные последствия и застраховать себя в будущем, заключив брачный договор с супругом. '
        }
        image={true}
      />

      <SituationsSection
        title={'Юридические нюансы брачного договора  '}
        description={
          'Неграмотно составленный брачный договор впоследствии может быть признан недействительным, лишая одну из сторон преимуществ, изложенных в тексте документа\n' +
          'при его подписании. '
        }
        subtitle={'Особенности брачного договора, которые необходимо знать до его заключения:'}
        list={featuresArr}
      />

      <PriceSection
        title={'Стоимость услуги'}
        price={3000}
        description={''}
        subtitle={'Услуга включает в себя'}
        list={priceArr}
      />
      <GuaranteesSection />
      <WhatNeedsSection items={whatNeedArr} />
      <ResultSection />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const pagesRes = await fetchAPI('/pages', { fields: ['slug'] });

  return {
    paths: pagesRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pagesRes = await fetchAPI('/pages', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const categoriesRes = await fetchAPI('/categories', { populate: '*' });
  const infoRes = await fetchAPI('/info');

  return {
    props: { page: pagesRes.data[0], categories: categoriesRes.data, info: infoRes.data },
    revalidate: 1,
  };
}

export default Page;
