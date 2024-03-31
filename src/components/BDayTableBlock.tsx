import { Box } from "@mui/material";
import { FC } from "react";
import {
  bdayTextBlockStyles,
  blackText,
  parentBoxStyles,
} from "../Matrix/personal/styles";
import theme from "../theme";
import { GreenText } from "../Matrix/personal/components/MatrixTable";

import { parseDate } from "../utils/calculate-matrix";

const calculateAge = (birthDate: string): number => {
  if (birthDate.length === 0) {
    return 0;
  }

  const date = parseDate(birthDate);

  const diff_ms = Date.now() - date.getTime();

  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

interface BDayTableBlockProps {
  date: string;
  name: string;
}

export const BDayTableBlock: FC<BDayTableBlockProps> = (props) => {
  return (
    <Box sx={{ ...parentBoxStyles, gap: "20px" }}>
      <Box sx={bdayTextBlockStyles}>
        <GreenText>Data di nascita:</GreenText>
        <Box component="span" sx={blackText}>
          {props.date.toString()}
        </Box>
      </Box>
      <Box sx={bdayTextBlockStyles}>
        <GreenText>Nome:</GreenText>
        <Box component="span" sx={blackText}>
          {props.name}
        </Box>
      </Box>
      <Box
        sx={{
          ...bdayTextBlockStyles,
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        }}
      >
        <GreenText> Età:</GreenText>
        <Box component="span" sx={blackText}>
          {calculateAge(props.date)}
        </Box>
      </Box>
    </Box>
  );
};

export default BDayTableBlock;
