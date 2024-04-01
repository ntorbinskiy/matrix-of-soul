import { Box } from "@mui/material";
import { FC } from "react";
import { GreenText } from "../../../Matrix/personal/components/MatrixTable";
import {
  dFlexColumn,
  setCircledNumbersStyles,
} from "../../../Matrix/personal/styles";
import theme from "../../../theme";
import { Label, SecondLabel, ThirdLabel } from "./types";

interface MatrixTableBlockViewProps {
  label: Label;
  secondLabel: SecondLabel;
  thirdLabel: ThirdLabel;
  circle1: number;
  circle2: number;
  circle3: number;
}

export const MatrixTableBlockView: FC<MatrixTableBlockViewProps> = (props) => {
  return (
    <Box sx={{ ...dFlexColumn }}>
      <GreenText>{props.label}</GreenText>
      <Box
        sx={{
          display: "flex",

          [theme.breakpoints.down("sm")]: {},
        }}
      >
        <Box
          sx={{
            ...dFlexColumn,
          }}
        >
          <GreenText>{props.secondLabel}</GreenText>
          <GreenText>{props.thirdLabel}</GreenText>
        </Box>
        <Box sx={setCircledNumbersStyles(" & > div > div, & > div + div")}>
          <Box
            sx={{
              ...dFlexColumn,
            }}
          >
            <Box>{props.circle1}</Box>
            <Box>{props.circle2}</Box>
          </Box>
          <Box>{props.circle3}</Box>
        </Box>
      </Box>
    </Box>
  );
};
