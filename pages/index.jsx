import { MainLayout } from "../layouts/MainLayout";
import { Box, Container, useMediaQuery } from "@mui/material";
import MainHero from "../components/MainHero/MainHero";
import Services from "../components/Services";
import { getStoryblokApi } from "@storyblok/react";

const Home = ({ info }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <MainLayout
      menus={info?.content?.menus}
      info={info?.content}
      metaTitle={"Юридический центр города Москвы"}
      metaDescription={"Юридический центр города Москвы"}
    >
      <Container>
        {/* {!matches && (
          <Box sx={{ maxWidth: '70%' }} mt={3}>
            <ContactsInfo address phone />
          </Box>
        )} */}
      </Container>
      <Box paddingY={matchesLg ? 0 : 3}></Box>
      <MainHero />

      <Services menus={info?.content?.menus} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let global = await storyblokApi.get(`cdn/stories/global`, sbParams);

  return {
    props: {
      info: global?.data ? global.data.story : false,
    },
    revalidate: 1800,
  };
}

export default Home;
