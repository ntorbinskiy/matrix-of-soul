import { Box } from "@mui/material";

import { FC, ReactNode } from "react";
import {
  blackText,
  boxStyles,
  circleItemStyles,
  dFlexColumn,
  setCircledNumbersStyles,
  textStyles,
} from "../styles";
import theme from "../../../theme";
import { calculateAge, calculateMatrix } from "../../../utils/calculate-matrix";
import {
  SecondTableArgs,
  ThirdTableArgs,
  calculateSecondTable,
  calculateThirdTable,
} from "../../../utils/calculate-tables";
import { useGlobalState } from "../../../provider";

interface GreenTextProps {
  children: ReactNode;
}
interface ParentStylesProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ParentStylesProvider: FC<ParentStylesProviderProps> = (props) => (
  <Box
    sx={{
      ...boxStyles,
      [theme.breakpoints.down("sm")]: {
        height: "110px",
        gap: "10px",
        width: "350px",
      },
      [theme.breakpoints.between("sm", "lg")]: {
        width: "600px",
      },
    }}
  >
    {props.children}
  </Box>
);

const GreenText: FC<GreenTextProps> = ({ children }) => {
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

const FirstTable: FC = () => {
  const { personalDate, personalName } = useGlobalState();

  return (
    <ParentStylesProvider>
      <Box sx={dFlexColumn}>
        <GreenText>Data di nascita:</GreenText>
        <Box component="span" sx={blackText}>
          {personalDate.toString()}
        </Box>
      </Box>
      <Box sx={dFlexColumn}>
        <GreenText>Nome:</GreenText>
        <Box component="span" sx={blackText}>
          {personalName}
        </Box>
      </Box>
      <Box
        sx={{
          ...dFlexColumn,
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
          {calculateAge(personalDate)}
        </Box>
      </Box>
    </ParentStylesProvider>
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
  <Box sx={{ ...dFlexColumn, gap: "20px" }}>
    <GreenText>{props.label}</GreenText>
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        [theme.breakpoints.down("sm")]: {
          gap: "0",
        },
      }}
    >
      <Box sx={{ ...dFlexColumn, gap: "15px" }}>
        <GreenText>{props.secondElement}</GreenText>
        <GreenText>{props.thirdElement}</GreenText>
      </Box>
      <Box sx={setCircledNumbersStyles(" & > div > div, & > div + div")}>
        <Box sx={{ ...dFlexColumn, gap: "5px" }}>
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

  const { a1, b1, c1, d1, e1, f1, g1, h1 } = calculateMatrix(personalDate);

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
    <ParentStylesProvider>
      <Box
        sx={{
          ...dFlexColumn,
          flexDirection: "row",
          gap: "15px",
          [theme.breakpoints.down("sm")]: {
            gap: "5px",
          },
        }}
      >
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
        <Box>
          <GreenText>Generale:</GreenText>
          <Box sx={setCircledNumbersStyles("&")}>{wholeValue}</Box>
        </Box>
      </Box>
    </ParentStylesProvider>
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

  const { e1, f1, g1, h1 } = calculateMatrix(personalDate);

  const thirdTableArgs: ThirdTableArgs = {
    e1,
    f1,
    g1,
    h1,
  };

  const { female1, female2, female3, male1, male2, male3, malePlusFemale } =
    calculateThirdTable(thirdTableArgs);

  return (
    <ParentStylesProvider>
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
    </ParentStylesProvider>
  );
};

export const MatrixTable: FC = () => {
  return (
    <Box
      sx={{
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <FirstTable />
      <SecondTable />
      <ThirdTable />
    </Box>
  );
};

export default MatrixTable;
