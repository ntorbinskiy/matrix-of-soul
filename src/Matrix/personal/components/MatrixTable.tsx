import { Box } from "@mui/material";

import { FC, ReactNode } from "react";
import {
  parentBoxStyles,
  circleItemStyles,
  dFlexColumn,
  setCircledNumbersStyles,
  textStyles,
} from "../styles";
import theme from "../../../theme";
import { calculatePersonalMatrix } from "../../../utils/calculate-matrix";
import {
  ThirdTableArgs,
  calculateThirdTable,
} from "../../../utils/calculate-tables";

import BDayTable from "../../../components/BDayTable";

import { MatrixTable } from "../../../components/matrix-table/MatrixTable";

import useSearchParamsState from "../../../utils/useSearchParamsState";

interface GreenTextProps {
  children: ReactNode;
}

export const GreenText: FC<GreenTextProps> = ({ children }) => {
  return (
    <Box
      component="span"
      sx={{
        ...textStyles,
        [theme.breakpoints.down("sm")]: {
          fontSize: "15px",
        },
      }}
    >
      {children}
    </Box>
  );
};

interface ThirdTableBlockProps {
  label: ReactNode;
  circle1: number;
  circle2: number;
  circle3: number;
}

const ThirdTableBlock: FC<ThirdTableBlockProps> = (props) => {
  return (
    <Box sx={dFlexColumn}>
      <GreenText>{props.label}</GreenText>
      <Box sx={setCircledNumbersStyles("& > div")}>
        <Box>{props.circle1}</Box>
        <Box>{props.circle2}</Box>
        <Box>{props.circle3}</Box>
      </Box>
    </Box>
  );
};

const ThirdTable = () => {
  const { personalDate } = useSearchParamsState();

  const { e1, f1, g1, h1 } = calculatePersonalMatrix(personalDate);

  const thirdTableArgs: ThirdTableArgs = {
    e1,
    f1,
    g1,
    h1,
  };

  const { female1, female2, female3, male1, male2, male3, malePlusFemale } =
    calculateThirdTable(thirdTableArgs);

  return (
    <Box sx={{ ...parentBoxStyles, pt: "14px", columnGap: "20px" }}>
      <ThirdTableBlock
        label={
          <>
            Programma <br />
            maschile:
          </>
        }
        circle1={male1}
        circle2={male2}
        circle3={male3}
      />
      <ThirdTableBlock
        label={
          <>
            Programma <br />
            femminile:
          </>
        }
        circle1={female1}
        circle2={female2}
        circle3={female3}
      />
      <Box>
        <GreenText>Potere familiare:</GreenText>
        <Box sx={circleItemStyles}>{malePlusFemale}</Box>
      </Box>
    </Box>
  );
};

export const MatrixTables: FC = () => {
  const { personalName, personalDate } = useSearchParamsState();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          width: "100%",
        },
        gap: "20px",
      }}
    >
      <BDayTable date={personalDate} name={personalName} />
      <MatrixTable />
      <ThirdTable />
    </Box>
  );
};

export default MatrixTables;
