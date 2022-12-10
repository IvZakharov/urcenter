import styles from "./LetsTalk.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import imageSvg from "./img/img.svg";
import { useMediaQuery, Container, Grid, Button, Box } from "@mui/material";
import Image from "next/image";
const LetsTalk = ({ whatsappLink }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className={styles.letsTalk} id="form">
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6} lg={5} order={matches ? 1 : 0}>
            <Box className={styles.imgWrap}>
              <Image src={imageSvg} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7} order={matches ? 0 : 1}>
            <h2 className={styles.title}>ЗАКАЖИТЕ УСЛУГУ НА НАШЕМ САЙТЕ</h2>
            <p className={styles.text}>
              Воспользуйтесь услугой нашего юридического центра сейчас, и вы
              сэкономите свое время, деньги и нервы.
            </p>
            <form
              component="form"
              autoComplete="off"
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box
                className={`${styles.field} ${
                  errors.userName && styles.fieldError
                }`}
              >
                <label htmlFor="userName">Ваше имя:</label>
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  id="userName"
                  name="userName"
                />
                {errors.userName && <span>Укажите ваше имя</span>}
              </Box>
              <Box
                className={`${styles.field} ${
                  errors.userTel && styles.fieldError
                }`}
              >
                <label htmlFor="userTel">Телефон:</label>
                <input
                  type="tel"
                  {...register("userTel", { required: true })}
                  id="userTel"
                  name="userTel"
                />
                {errors.userTel && <span>Укажите ваш номер телефона</span>}
              </Box>
              <Box className={styles.buttons}>
                <Button
                  type={"submit"}
                  sx={{
                    width: matches ? "auto" : "100%",
                    backgroundColor: "#fff",
                    color: "primary.main",
                    whiteSpace: "nowrap",
                    fontSize: 16,
                    ":hover": {
                      backgroundColor: "#e1e1e1",
                    },
                  }}
                >
                  Отправить заявку
                </Button>

                <p className={styles.or}>или</p>
                <Button
                  href={whatsappLink}
                  target={"_blank"}
                  variant={"outlined"}
                  sx={{
                    width: matches ? "auto" : "100%",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    whiteSpace: "nowrap",
                    fontSize: 16,
                    ":hover": {
                      border: "1px solid white",
                      backgroundColor: "white",
                      color: "primary.main",
                    },
                  }}
                >
                  Написать в WhatsApp
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LetsTalk;
