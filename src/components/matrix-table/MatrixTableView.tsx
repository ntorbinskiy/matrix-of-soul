import { Box } from "@mui/material";
import { FC } from "react";
import { GreenText } from "../../Matrix/personal/components/MatrixTable";
import {
  parentBoxStyles,
  dFlexColumn,
  setCircledNumbersStyles,
} from "../../Matrix/personal/styles";
import theme from "../../theme";
import { MatrixTableBlock } from "./matrix-table-block/MatrixTableBlock";
import { EndingText } from "./matrix-table-block/types";

interface MatrixTableViewProps {
  endingText: EndingText;
  wholeValue: number;
}

const MatrixTableView: FC<MatrixTableViewProps> = (props) => {
  return (
    <Box sx={{ ...parentBoxStyles, pt: "12px" }}>
      <Box
        sx={{
          ...dFlexColumn,
          [theme.breakpoints.down("lg")]: {
            flexDirection: "row",
          },
        }}
      >
        <Box sx={{ columnGap: "20px" }}>
          <MatrixTableBlock type="personal" />
          <MatrixTableBlock type="social" />
        </Box>
        <Box
          sx={{
            pt: "36px",
            [theme.breakpoints.down("lg")]: {
              pt: 0,
              pl: "10px",
            },
          }}
        >
          <GreenText>{props.endingText}</GreenText>
          <Box sx={setCircledNumbersStyles("&")}>{props.wholeValue}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MatrixTableView;
