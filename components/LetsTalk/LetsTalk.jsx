import styles from "./LetsTalk.module.scss";
import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import imageSvg from "./img/img.svg";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import {
  useMediaQuery,
  Container,
  Grid,
  Button,
  Box,
  CircularProgress,
  Dialog,
} from "@mui/material";
import Image from "next/image";
const LetsTalk = ({ whatsappLink }) => {
  const matches = useMediaQuery("(min-width: 1024px)");
  const [loading, setLoading] = React.useState(false);
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    setLoading(true);
    data.sessionId = window.ct("calltracking_params", "3anfrf6i")?.sessionId;
    data.requestUrl = window.location.href;
    data.subject = "Заявка с сайта";

    console.log(data);

    axios
      .post(
        `https://api.calltouch.ru/calls-service/RestAPI/requests/${61988}/register/`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        reset();
        setLoading(false);
        setDialogIsOpen(true);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

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
              autoComplete="off"
              className={styles.form}
              onSubmit={handleSubmit(sendEmail)}
            >
              <Box
                className={`${styles.field} ${errors.fio && styles.fieldError}`}
              >
                <label htmlFor="fio">Ваше имя:</label>
                <input
                  {...register("fio", { required: true })}
                  type="text"
                  id="fio"
                  name="fio"
                />
                {errors.fio && <span>Укажите ваше имя</span>}
              </Box>
              <Box
                className={`${styles.field} ${
                  errors.phoneNumber && styles.fieldError
                }`}
              >
                <label htmlFor="phoneNumber">Телефон:</label>
                <input
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                  id="phoneNumber"
                  name="phoneNumber"
                />
                {errors.phoneNumber && <span>Укажите ваш номер телефона</span>}
              </Box>
              <Box className={styles.buttons}>
                <Button
                  type={"submit"}
                  sx={{
                    width: matches ? "auto" : "100%",
                    flex: 1,
                    backgroundColor: "#fff",
                    color: "primary.main",
                    whiteSpace: "nowrap",
                    fontSize: 16,
                    ":hover": {
                      backgroundColor: "#e1e1e1",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={30} />
                  ) : (
                    "Отправить заявку"
                  )}
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

      <Dialog open={dialogIsOpen} onClick={() => setDialogIsOpen(false)}>
        <Box className={styles.dialogContent}>
          <MailRoundedIcon
            sx={{ fontSize: matches ? 180 : 120, color: "primary.main" }}
          />
          <h3 className={styles.title}>Спасибо!</h3>
          <p className={styles.description}>
            Ваша заявка отправлена. <br /> Наш менеджер свяжется с вами в
            ближайшее время.
          </p>

          <Button
            onClick={() => setDialogIsOpen(false)}
            sx={{ padding: "12px 80px", fontSize: matches ? 18 : 16 }}
          >
            Отлично
          </Button>
        </Box>
      </Dialog>
    </section>
  );
};

export default LetsTalk;
