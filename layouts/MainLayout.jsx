import Head from "next/head";
import React from "react";
import { ThemeProvider } from "@mui/material";

import { theme } from "../theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import LetsTalk from "../components/LetsTalk/LetsTalk";

export const MainLayout = ({
  children,
  metaTitle,
  metaDescription,
  keywords,
  categories,
  info,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Юридический центр города Москвы – {metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content="/img/head/meta.jpg" />
      </Head>
      <Header
        categories={categories}
        info={info}
        onClickOpen={() => setMobileMenuOpen(true)}
      />

      <div className="main">{children}</div>
      <LetsTalk whatsappLink={info.attributes.whatsAppLink} />
      <Footer info={info} />

      <MobileMenu
        categories={categories}
        info={info}
        open={mobileMenuOpen}
        onClickClose={() => setMobileMenuOpen(false)}
      />
    </ThemeProvider>
  );
};
