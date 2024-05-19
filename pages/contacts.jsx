import { MainLayout } from "../layouts/MainLayout";
import Iframe from "react-iframe";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ServicesHero from "../components/ServicesHero/ServicesHero";
import { fetchAPI } from "../lib/api";
import ContactsInfo from "../components/ContactsInfo/ContactsInfo";
import { getStoryblokApi } from "@storyblok/react";

const Contacts = ({ info }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <MainLayout
      menus={info?.content?.menus}
      info={info?.content}
      metaTitle={"Контакты"}
      metaDescription={"Юридический центр города Москвы"}
    >
      <Container>
        <Box mb={matches ? 20 : 12}>
          <Box mb={matches ? 12 : 8}>
            <ServicesHero title={"Контакты"} />
          </Box>

          <Grid container spacing={matches ? 24 : 8}>
            <Grid item xs={12} md={4}>
              <Box sx={{ maxWidth: matches ? "auto" : "250px" }}>
                <ContactsInfo
                  address
                  info={info?.content}
                  email
                  phone
                  whatsApp
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps">
                  <Typography
                    sx={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px",
                    }}
                  >
                    {" "}
                    Москва
                  </Typography>
                </a>
                <a href="https://yandex.ru/maps/213/moscow/house/skatertny_pereulok_5s2/Z04Ycw5nSUYAQFtvfXt0dH1rZQ==/?ll=37.597037%2C55.755181&utm_medium=mapframe&utm_source=maps&z=16.87">
                  <Typography
                    sx={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "14px",
                    }}
                  >
                    {" "}
                    Скатертный переулок, 5с2 — Яндекс Карты
                  </Typography>
                </a>
                <Iframe
                  src="https://yandex.ru/map-widget/v1/-/CCUZ50eupA"
                  width="800"
                  height="400"
                  frameborder="1"
                  position="relatuve"
                  allowFullScreen="true"
                ></Iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
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

export default Contacts;
