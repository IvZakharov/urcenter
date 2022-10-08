import styles from "./RegistrationTable.module.scss";
import React from "react";
import {
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

const RegistrationTable = () => {
  const materialStyles = {
    tableCell: {
      borderBottom: "1px dashed #AC9ADE",
      fontSize: 20,
    },

    tableCellHead: {
      borderBottom: "1px dashed #AC9ADE",
      fontSize: 20,
      fontWeight: 500,

      color: "primary.main",
    },
  };

  const data = [
    {
      name: "ПОЛНЫЙ",
      price: "12000",
      includes: [
        "",
        "Подготовка всех необходимых документов для первичной регистрации ООО (внесения изменений);",
        "Подготовка заявлений для государственной регистрации (внесение изменений);",
        "Сопровождение нотариального заверения подписи на заявлениях для регистрации (БЕЗ ОЧЕРЕДИ);",
        "Подача документов в МИФНС № 46 по г. Москве;",
        "Изготовление печати",
        "Получение письма о присвоении кодов статистики в Госкомстате;",
        "Получение извещения страхователя из Пенсионного фонда;",
        "Получение извещения страхователя из фонда социального страхования;",
        "Доставка зарегистрированных документов клиенту (в пределах МКАД)",
      ],
    },
  ];

  function createData(name, services, econom, standart, full) {
    return { name, services, econom, standart, full };
  }

  const rows = [
    createData(
      "Консультация специалиста по регистрации нового ООО/внесению изменений;",
      ".",
      true,
      true
    ),
    createData("Ice cream sandwich", true, true, true, true),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <section className={styles.registrationTable}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={"55%"} sx={materialStyles.tableCellHead}>
              КОМПЛЕКС УСЛУГ
            </TableCell>
            <TableCell
              width={"15%"}
              sx={materialStyles.tableCellHead}
              align="center"
            >
              ЭКОНОМ
            </TableCell>
            <TableCell
              width={"15%"}
              sx={materialStyles.tableCellHead}
              align="center"
            >
              СТАНДАРТ
            </TableCell>
            <TableCell
              width={"15%"}
              sx={materialStyles.tableCellHead}
              align="center"
            >
              ПОЛНЫЙ
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={materialStyles.tableCell}
                width={"55%"}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell sx={materialStyles.tableCell} align="center">
                {row.services && (
                  <Box className={styles.check}>
                    <Box component="i"></Box>
                  </Box>
                )}
              </TableCell>
              <TableCell sx={materialStyles.tableCell} align="center">
                {row.econom}
              </TableCell>
              <TableCell sx={materialStyles.tableCell} align="center">
                {row.standart}
              </TableCell>
              <TableCell sx={materialStyles.tableCell} align="center">
                {row.full}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default RegistrationTable;
