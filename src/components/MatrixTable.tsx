import { Box } from "@mui/material";

import { FC, ReactNode } from "react";
import {
  blackText,
  boxStyles,
  circleItemStyles,
  dFlexColumn,
  setCircledNumbersStyles,
  textStyles,
} from "../Matrix/styles";
import theme from "../theme";
import { calculateMatrix } from "../utils/calculate-matrix";
import {
  ISecondTable,
  SecondTableArgs,
  calculateSecondTable,
} from "../utils/calculate-tables";

const calculateAge = (globalDate: string): number => {
  if (globalDate.length === 0) {
    return 0;
  }

  const date = new Date(globalDate);

  const diff_ms = Date.now() - date.getTime();

  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

interface MatrixTableProps {
  globalName: string;
  globalDate: string;
}

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
      [theme.breakpoints.between("sm", "md")]: {
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
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "19px",
        },
      }}
    >
      {children}
    </Box>
  );
};

const FirstTable: FC<MatrixTableProps> = (props) => {
  return (
    <ParentStylesProvider>
      <Box sx={dFlexColumn}>
        <GreenText>Data di nascita:</GreenText>
        <Box component="span" sx={blackText}>
          {props.globalDate.toString()}
        </Box>
      </Box>
      <Box sx={dFlexColumn}>
        <GreenText>Nome:</GreenText>
        <Box component="span" sx={blackText}>
          {props.globalName}
        </Box>
      </Box>
      <Box
        sx={{
          ...dFlexColumn,
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <GreenText> Età:</GreenText>
        <Box component="span" sx={blackText}>
          {calculateAge(props.globalDate)}
        </Box>
      </Box>
    </ParentStylesProvider>
  );
};

interface SecondTableBlockProps {
  label: "Per me:" | "Per le persone:";
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

interface SecondTableProps {
  secondTableValues: ISecondTable;
}

const SecondTable: FC<SecondTableProps> = ({ secondTableValues }) => {
  const { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue } =
    secondTableValues;

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
          label="Per me:"
          secondElement="Cielo:"
          thirdElement="Terra:"
          circle1={sky}
          circle2={earth}
          circle3={skyPlusEarth}
        />
        <SecondTableBlock
          label="Per le persone:"
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
}

const ThirdTableBlock: FC<ThirdTableBlockProps> = (props) => {
  return (
    <Box sx={dFlexColumn}>
      <GreenText>{props.label}</GreenText>
      <Box sx={setCircledNumbersStyles("& > div")}>
        <Box>8</Box>
        <Box>19</Box>
        <Box>6</Box>
      </Box>
    </Box>
  );
};

const ThirdTable = () => {
  return (
    <ParentStylesProvider>
      <ThirdTableBlock
        label={
          <>
            Programma <br />
            maschile:
          </>
        }
      />
      <ThirdTableBlock
        label={
          <>
            Programma <br />
            femminile:
          </>
        }
      />
      <Box>
        <GreenText>Potere familiare:</GreenText>
        <Box sx={circleItemStyles}>7</Box>
      </Box>
    </ParentStylesProvider>
  );
};

interface MatrixTableProps {
  globalName: string;
  globalDate: string;
}

export const MatrixTable: FC<MatrixTableProps> = (props) => {
  const { a1, b1, c1, d1, e1, f1, g1, h1 } = calculateMatrix(props.globalDate);

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

  const secondTable = calculateSecondTable(secondTableArgs);

  return (
    <Box
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <FirstTable globalDate={props.globalDate} globalName={props.globalName} />
      <SecondTable secondTableValues={secondTable} />
      <ThirdTable />
    </Box>
  );
};

export default MatrixTable;
