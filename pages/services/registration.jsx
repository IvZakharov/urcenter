import { MainLayout } from "../../layouts/MainLayout";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import { useMediaQuery, Container, Grid, Button, Box } from "@mui/material";
import RegistrationMobile from "../../components/RegistrationMobile/RegistrationMobile";
import LetsTalk from "../../components/LetsTalk/LetsTalk";

export default function Registration() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <MainLayout metaTitle={"Регистрация"} metaDescription={"Регистрация"}>
      <Box mb={3}>
        <ServicesHero title={"Регистрация"} />
      </Box>
      <RegistrationMobile />
      <LetsTalk />
    </MainLayout>
  );
}
