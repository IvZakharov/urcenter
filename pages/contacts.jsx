import { MainLayout } from "../layouts/MainLayout";
import Iframe from "react-iframe";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ServicesHero from "../components/ServicesHero/ServicesHero";
import { fetchAPI } from "../lib/api";
import ContactsInfo from "../components/ContactsInfo/ContactsInfo";

const Contacts = ({ info, categories }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <MainLayout
      categories={categories}
      info={info}
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
                <ContactsInfo address info={info} email phone whatsApp />
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
  // Run API calls in parallel
  const [infoRes, categoriesRes] = await Promise.all([
    fetchAPI("/info"),
    fetchAPI("/categories", { populate: "deep" }),
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
