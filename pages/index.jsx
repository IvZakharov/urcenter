import { MainLayout } from "../layouts/MainLayout";
import axios from "axios";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import MainHero from "../components/MainHero/MainHero";
import Services from "../components/Services";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import { fetchAPI } from "../lib/api";

const Home = ({ info, categories }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <MainLayout
      categories={categories}
      info={info}
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

      <Services categories={categories} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [infoRes, categoriesRes] = await Promise.all([
    fetchAPI("/info"),
    fetchAPI("/categories", { populate: "deep" }),
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
