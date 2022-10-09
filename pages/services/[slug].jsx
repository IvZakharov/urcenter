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
import BenefitSection from '../../components/BenefitSection/BenefitSection';

const Page = ({ page, categories, info }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  console.log(page);

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

  return (
    <MainLayout
      categories={categories}
      info={info}
      metaTitle={page.attributes.title}
      metaDescription={'Брачный договор'}>
      <Box mb={matches ? 20 : 12}>
        <ServicesHero title={page.attributes.title} />
      </Box>

      {page.attributes.blocks &&
        page.attributes.blocks.map((obj, idx) => {
          switch (obj.__component) {
            case 'blocks.about':
              return (
                <Box key={idx} mb={matches ? 10 : 8}>
                  <AboutServices columnOne={obj.column1} columnTwo={obj.column2} />
                </Box>
              );
            case 'blocks.note':
              return <NoteSection key={idx} description={obj.text} image={obj.icon} />;
            case 'blocks.section-with-list':
              return (
                <SituationsSection
                  key={idx}
                  title={obj.title}
                  description={obj.text}
                  subtitle={obj.listTitle}
                  list={[obj.sectionList]}
                />
              );
            case 'blocks.price':
              return (
                <PriceSection
                  key={idx}
                  title={'Стоимость услуги'}
                  price={obj.price}
                  description={obj.additional}
                  subtitle={obj.listTitle}
                  list={obj.list}
                />
              );
            case 'blocks.guarantee':
              return <GuaranteesSection key={idx} />;
            case 'blocks.what-need':
              return <WhatNeedsSection key={idx} items={obj.item} />;
            case 'blocks.benefits':
              return <BenefitSection key={idx} description={obj.text} />;
            case 'blocks.result':
              return <ResultSection key={idx} description={obj.text} />;
            default:
              break;
          }
        })}
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const pagesRes = await fetchAPI('/pages', {
    filters: {
      slug: params.slug,
    },
    populate: 'deep',
  });
  const categoriesRes = await fetchAPI('/categories', { populate: '*' });
  const infoRes = await fetchAPI('/info');

  return {
    props: { page: pagesRes.data[0], categories: categoriesRes.data, info: infoRes.data },
    revalidate: 1,
  };
}

export default Page;
