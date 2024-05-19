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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RegistrationTable = ({
  economyPrice,
  standartPrice,
  fullPrice,
  tableRows,
}) => {
  const materialStyles = {
    tableCell: {
      borderBottom: "1px dashed #AC9ADE",
      fontSize: 20,
    },

    tableCellHead: {
      fontSize: 20,
      fontWeight: 500,
      color: "primary.main",
      borderBottom: "none",
    },
  };

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
          {tableRows &&
            tableRows.map((row, idx) => (
              <TableRow
                key={idx}
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
                  {row.econom && (
                    <FiberManualRecordIcon
                      sx={{ color: "primary.main", fontSize: 16 }}
                    />
                  )}
                </TableCell>
                <TableCell sx={materialStyles.tableCell} align="center">
                  {row.standart && (
                    <FiberManualRecordIcon
                      sx={{ color: "primary.main", fontSize: 16 }}
                    />
                  )}
                </TableCell>
                <TableCell sx={materialStyles.tableCell} align="center">
                  {row.full && (
                    <FiberManualRecordIcon
                      sx={{ color: "primary.main", fontSize: 16 }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}

          <TableRow sx={{ borderTop: "1px solid #AC9ADE" }}>
            <TableCell
              width={"55%"}
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: "primary.main",
                textAlign: "right",
                borderBottom: "none",
              }}
            >
              СТОИМОСТЬ:
            </TableCell>
            <TableCell
              width={"15%"}
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: "primary.main",
                borderBottom: "none",
              }}
              align="center"
            >
              {economyPrice}
            </TableCell>
            <TableCell
              width={"15%"}
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: "primary.main",
                borderBottom: "none",
              }}
              align="center"
            >
              {standartPrice}
            </TableCell>
            <TableCell
              width={"15%"}
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: "primary.main",
                borderBottom: "none",
              }}
              align="center"
            >
              {fullPrice}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default RegistrationTable;
