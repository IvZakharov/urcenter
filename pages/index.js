import { MainLayout } from "../layouts/MainLayout";
import ContactsInfo from "../components/ContactsInfo/ContactsInfo";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import MainHero from "../components/MainHero/MainHero";
import Services from "../components/Services";
import LetsTalk from "../components/LetsTalk/LetsTalk";

export default function Home() {
  const matches = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <MainLayout metaTitle={"Главаная"} metaDescription={"Юр юр юр "}>
      <Container>
        {!matches && (
          <Box sx={{ maxWidth: "70%" }} mt={3}>
            <ContactsInfo address phone />
          </Box>
        )}
      </Container>
      <Box paddingY={matches ? 6 : 3}></Box>
      <MainHero />
      <Box
        component={"section"}
        sx={{ paddingY: 10, paddingX: matchesLg ? 35 : 2 }}
      >
        <Container>
          <Typography
            variant={"body1"}
            sx={{
              fontSize: matches ? 32 : 20,
              lineHeight: 1.5,
              textAlign: matches ? "center" : "left",
            }}
          >
            <Typography
              variant={"inherit"}
              component="span"
              color={"primary.main"}
            >
              Юридический центр г. Москвы
            </Typography>{" "}
            в Скатертном переулке, дом 5 работает с 1998 г. и надёжно помогает
            своим клиентам в юридических вопросах.
          </Typography>
        </Container>
      </Box>
      <Services />
      <LetsTalk />
    </MainLayout>
  );
}
