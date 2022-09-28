import styles from "./Footer.module.scss";
import logoSvg from "./img/logo.svg";

import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ContactsInfo from "../ContactsInfo/ContactsInfo";

const Footer = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Link href={"/"}>
                <a>
                  <Image src={logoSvg} />
                </a>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ paddingRight: 10 }}
              mb={matches ? 0 : 3}
            >
              <ContactsInfo address email phone />
            </Grid>
            <Grid item xs={12} md={4} sx={{ paddingRight: 10 }}>
              <p className={styles.text}>ИП Ильина Ирина Алексеевна</p>
              <p className={styles.text}>ОГРНИП 315774600179189</p>
              <p className={styles.text}>Политика конфиденциальности</p>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
