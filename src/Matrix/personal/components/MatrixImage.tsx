import { Box, useMediaQuery, useTheme } from "@mui/material";

import theme from "../../../theme";

import { FC, useEffect, useState } from "react";
import { useGlobalState } from "../../../provider";
import { calculatePersonalMatrix } from "../../../utils/calculate-matrix";

type NumberBackground =
  | "rgb(138 70 163)"
  | "rgb(82 109 250)"
  | "rgb(69 207 225)"
  | "rgb(128 202 41)"
  | "rgb(255 215 0)"
  | "rgb(255 174 52)"
  | "rgb(239 65 65)";

type ContainerDimensions = "9%" | "7%" | "4.3%";
type ContainerFontSizes = "35px" | "30px" | "21px" | "15px" | "10px";

interface NumberPositionState {
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
}

interface NumberPositionStyles {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
}

interface NumberState extends NumberPositionState {
  number: number;
  middleX?: boolean;
  middleY?: boolean;
  size: "small" | "medium" | "large";
  color?: "white";
  background?: NumberBackground;
}

interface NumberStyles extends NumberPositionStyles {
  width: ContainerDimensions;
  height: ContainerDimensions;
  fontSize: ContainerFontSizes;
  color: "white" | "black";
  background?: NumberBackground | "white";
  border: "none" | "2px solid grey";
}

interface NumberProps {
  state: NumberState;
}

const useNumberStyles = (number: NumberState): NumberStyles => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = useState<NumberStyles>({
    fontSize: "35px",
    width: "9%",
    height: "9%",
    top: number.top ? `${number.top}%` : "unset",
    left: number.left ? `${number.left}%` : "unset",
    right: number.right ? `${number.right}%` : "unset",
    bottom: number.bottom ? `${number.bottom}%` : "unset",
    color: number.color ? "white" : "black",
    background: number.background ?? "white",
    border: number.background ? "none" : "2px solid grey",
  });

  useEffect(() => {
    switch (number.size) {
      case "large":
        setState({
          ...state,
          bottom: number.middleX ? "45.5%" : state.bottom,
          right: number.middleY ? "45.5%" : state.right,
          fontSize: isSmallScreen ? "21px" : "35px",
        });
        break;

      case "medium":
        setState({
          ...state,
          bottom: number.middleX ? "46.5%" : state.bottom,
          right: number.middleY ? "46.5%" : state.right,
          fontSize: isSmallScreen ? "15px" : "30px",
          width: "7%",
          height: "7%",
        });
        break;

      case "small":
        setState({
          ...state,
          bottom: number.middleX ? "48%" : state.bottom,
          right: number.middleY ? "48%" : state.right,
          fontSize: isSmallScreen ? "10px" : "21px",
          width: "4.3%",
          height: "4.3%",
        });

        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number.middleX, number.middleY, number.size, isSmallScreen]);

  return state;
};

const Number: FC<NumberProps> = ({ state }) => {
  const styles = useNumberStyles(state);

  return (
    <Box
      sx={{
        ...styles,
        borderRadius: "50%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.number}
    </Box>
  );
};

const useNumbersList = (): NumberState[] => {
  const { personalDate, matrixType } = useGlobalState();

  const {
    a1,
    a2,
    a3,
    a4,
    b1,
    b2,
    b3,
    b4,
    c1,
    c2,
    c3,
    d1,
    d2,
    d3,
    e1,
    e2,
    e3,
    f1,
    f2,
    f3,
    g1,
    g2,
    g3,
    h1,
    h2,
    h3,
    k,
    n,
    o,
    centerNumber,
  } = calculatePersonalMatrix(personalDate);

  const compatibleMatrixNumbers: NumberState[] = [
    {
      number: b1,
      color: "white",
      size: "large",
      middleY: true,
      top: 4,
      background: "rgb(138 70 163)",
    },
    {
      number: b2,
      color: "white",
      size: "medium",
      middleY: true,
      top: 13,
      background: "rgb(82 109 250)",
    },
    { number: e1, size: "large", left: 16, top: 16 },
    { number: f1, size: "large", right: 16, top: 16 },
    {
      number: b3,
      color: "white",
      size: "small",
      middleY: true,
      top: 20,
      background: "rgb(69 207 225)",
    },
    {
      number: b4,
      color: "white",
      size: "small",
      middleY: true,
      top: 32,
      background: "rgb(128 202 41)",
    },
    {
      number: a1,
      color: "white",
      size: "large",
      middleX: true,
      left: 4,
      background: "rgb(138 70 163)",
    },
    {
      number: a2,
      color: "white",
      size: "medium",
      middleX: true,
      left: 12.5,
      background: "rgb(82 109 250)",
    },
    {
      number: a3,
      color: "white",
      size: "small",
      left: 19.6,
      middleX: true,
      background: "rgb(69 207 225)",
    },
    {
      number: a4,
      color: "white",
      size: "small",
      middleX: true,
      left: 31.5,
      background: "rgb(128 202 41)",
    },
    {
      number: centerNumber,
      size: "large",
      middleX: true,
      middleY: true,
      background: "rgb(255 215 0)",
    },
    {
      number: c1,
      color: "white",
      size: "large",
      middleX: true,
      right: 4,
      background: "rgb(239 65 65)",
    },
    {
      number: c2,
      size: "medium",
      middleX: true,
      right: 12.5,
    },
    {
      number: c3,
      color: "white",
      size: "small",
      middleX: true,
      right: 19.8,
      background: "rgb(255 174 52)",
    },
    {
      number: o,
      size: "small",
      bottom: 42,
      right: 26,
    },
    {
      number: k,
      size: "small",
      bottom: 33.8,
      right: 33.8,
    },
    {
      number: n,
      size: "small",
      bottom: 26.5,
      right: 41,
    },
    {
      number: d3,
      color: "white",
      size: "small",
      middleY: true,
      bottom: 20.5,
      background: "rgb(255 174 52)",
    },
    {
      number: h1,
      left: 16,
      bottom: 16,
      size: "large",
    },
    {
      number: g1,
      size: "large",
      right: 16,
      bottom: 16,
    },
    {
      number: d2,
      size: "medium",
      middleY: true,
      bottom: 13,
    },
    {
      number: d1,
      color: "white",
      size: "large",
      middleY: true,
      bottom: 4,
      background: "rgb(239 65 65)",
    },
  ];

  const personalMatrixNumbers: NumberState[] = [
    ...compatibleMatrixNumbers,
    { number: e2, size: "medium", left: 23, top: 23 },
    { number: f2, size: "medium", right: 23, top: 23 },
    { number: e3, size: "small", left: 29, top: 29 },
    { number: f3, size: "small", right: 29, top: 29 },
    {
      number: h3,
      size: "small",
      bottom: 28.5,
      right: 28.5,
    },
    {
      number: g3,
      size: "small",
      bottom: 28.5,
      left: 28.5,
    },
    {
      number: h2,
      size: "medium",
      bottom: 23,
      left: 23,
    },
    {
      number: g2,
      size: "medium",
      bottom: 23,
      right: 23,
    },
  ];

  return matrixType === "personal"
    ? personalMatrixNumbers
    : compatibleMatrixNumbers;
};

const NumberList: FC = () => {
  const matrixNumbers = useNumbersList();

  return (
    <>
      {matrixNumbers.map((number, index) => (
        <Number state={number} key={index} />
      ))}
    </>
  );
};

const MatrixImage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.up("lg")]: {
          order: 4,
        },
        position: "relative",
      }}
    >
      <Box sx={{ maxWidth: "700px", position: "relative" }}>
        <img
          src="/matrix.png"
          alt="matrix"
          width={696}
          height={700}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <NumberList />
      </Box>
    </Box>
  );
};

export default MatrixImage;
