import RegistrationDesktop from "../../components/RegistrationDesktop/RegistrationDesktop";
import RegistrationMobile from "../../components/RegistrationMobile/RegistrationMobile";
import { useMediaQuery } from "@mui/material";

const TablePrice = ({ blok }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  const { text, rows, economyPrice, standartPrice, fullPrice } = blok;

  return matchesLg ? (
    <RegistrationDesktop
      text={text}
      economyPrice={economyPrice}
      standartPrice={standartPrice}
      fullPrice={fullPrice}
      tableRows={rows}
    />
  ) : (
    <RegistrationMobile
      text={text}
      economyPrice={economyPrice}
      standartPrice={standartPrice}
      fullPrice={fullPrice}
      tableRows={rows}
    />
  );
};

export default TablePrice;
