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
  SecondTableArgs,
  ThirdTableArgs,
  calculateSecondTable,
  calculateThirdTable,
} from "../../../utils/calculate-tables";
import { useGlobalState } from "../../../provider";
import BDayTableBlock from "../../../components/BDayTableBlock";

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

interface SecondTableBlockProps {
  label: "Personale:" | "Sociale:";
  secondElement: "Cielo:" | "Uomo:";
  thirdElement: "Terra:" | "Donna:";
  circle1: number;
  circle2: number;
  circle3: number;
}

const SecondTableBlock: FC<SecondTableBlockProps> = (props) => (
  <Box sx={{ ...dFlexColumn }}>
    <GreenText>{props.label}</GreenText>
    <Box
      sx={{
        display: "flex",
        // gap: "10px",
        [theme.breakpoints.down("sm")]: {
          //   gap: "0",
        },
      }}
    >
      <Box
        sx={{
          ...dFlexColumn,
          // gap: "15px"
        }}
      >
        <GreenText>{props.secondElement}</GreenText>
        <GreenText>{props.thirdElement}</GreenText>
      </Box>
      <Box sx={setCircledNumbersStyles(" & > div > div, & > div + div")}>
        <Box
          sx={{
            ...dFlexColumn,
            //  gap: "5px"
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

const SecondTable: FC = () => {
  const { personalDate } = useGlobalState();

  const { a1, b1, c1, d1, e1, f1, g1, h1 } =
    calculatePersonalMatrix(personalDate);

  const secondTableArgs: SecondTableArgs = {
    a1,
    b1,
    c1,
    d1,
    e1,
    f1,
    g1,
    h1,
  };

  const { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue } =
    calculateSecondTable(secondTableArgs);

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
          <SecondTableBlock
            label="Personale:"
            secondElement="Cielo:"
            thirdElement="Terra:"
            circle1={sky}
            circle2={earth}
            circle3={skyPlusEarth}
          />
          <SecondTableBlock
            label="Sociale:"
            secondElement="Uomo:"
            thirdElement="Donna:"
            circle1={male}
            circle2={female}
            circle3={malePlusFemale}
          />
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
          <GreenText>Generale:</GreenText>
          <Box sx={setCircledNumbersStyles("&")}>{wholeValue}</Box>
        </Box>
      </Box>
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
  const { personalDate } = useGlobalState();

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

export const MatrixTable: FC = () => {
  const { personalName, personalDate } = useGlobalState();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          width: "100%",
        },
      }}
    >
      <BDayTableBlock date={personalDate} name={personalName} />
      <SecondTable />
      <ThirdTable />
    </Box>
  );
};

export default MatrixTable;
