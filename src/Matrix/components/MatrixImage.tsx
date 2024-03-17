import { Box } from "@mui/material";

import theme from "../../theme";

import { FC, useEffect, useState } from "react";
import { useGlobalState } from "../../provider";
import { calculateMatrix } from "../../utils/calculate-matrix";
import { useWindowDimensions } from "../../components/Form";

interface NumberState {
  number: number;
  color?: "white";
  middleX?: boolean;
  middleY?: boolean;
  size: "small" | "medium" | "large";
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
}

interface NumberProps {
  state: NumberState;
}

const Number: FC<NumberProps> = ({ state }) => {
  const { width } = useWindowDimensions();

  const [fontSize, setFontSize] = useState("");
  const [bottomState, setBottomState] = useState("unset");
  const [rightState, setRightState] = useState("unset");

  const { number, size, color, middleX, middleY, bottom, left, right, top } =
    state;

  useEffect(() => {
    if (width > 500) {
      switch (size) {
        case "large":
          setFontSize("35px");
          break;
        case "medium":
          setFontSize("30px");
          break;
        case "small":
          setFontSize("21px");
          break;
      }
    }
  }, [size, width]);

  useEffect(() => {
    if (width < 500) {
      switch (size) {
        case "large":
          setFontSize("20px");
          break;
        case "medium":
          setFontSize("15px");
          break;
        case "small":
          setFontSize("10px");
          break;
      }
    }
  }, [size, width]);

  useEffect(() => {
    if (bottom) {
      setBottomState(`${bottom}%`);
    }

    if (middleX && !bottom) {
      setBottomState("47%");
    }

    if (right) {
      setRightState(`${right}%`);
    }

    if (middleY && !right) {
      setRightState("50%");
    }
  }, [bottom, right, middleX, middleY]);

  return (
    <Box
      sx={{
        position: "absolute",
        fontSize,
        color: color ? "white" : "black",
        bottom: bottomState,
        top: top ? `${top}%` : "unset",
        right: rightState,
        left: left ? `${left}%` : "unset",
      }}
    >
      {number}
    </Box>
  );
};

const NumberList: FC = () => {
  const { globalDate } = useGlobalState();

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
  } = calculateMatrix(globalDate);

  const numbersStateArray: NumberState[] = [
    {
      number: b1,
      color: "white",
      size: "large",
      right: 50.5,
      top: 6.5,
    },
    {
      number: b2,
      color: "white",
      size: "medium",
      right: 50.5,
      top: 15,
    },
    { number: e1, size: "large", left: 13.5, top: 18.5 },
    { number: f1, size: "large", right: 18, top: 19 },
    {
      number: b3,
      color: "white",
      size: "small",
      right: 50.5,
      top: 21.5,
    },
    { number: e2, size: "medium", left: 22, top: 25 },
    { number: f2, size: "medium", right: 25, top: 25.5 },
    { number: e3, size: "small", left: 26.6, top: 29.6 },
    { number: f3, size: "small", right: 29.7, top: 30.2 },
    {
      number: b4,
      color: "white",
      size: "small",
      right: 50.7,
      top: 33.5,
    },
    {
      number: a1,
      color: "white",
      size: "large",
      middleX: true,
      left: 2.5,
    },
    {
      number: a2,
      color: "white",
      size: "medium",
      bottom: 47.5,
      left: 12,
    },
    {
      number: a3,
      color: "white",
      size: "small",
      left: 18.2,
      bottom: 48.5,
    },
    {
      number: a4,
      color: "white",
      size: "small",
      bottom: 48,
      left: 31.5,
    },
    {
      number: centerNumber,
      size: "large",
      middleX: true,
      middleY: true,
    },
    {
      number: c1,
      color: "white",
      size: "large",
      middleX: true,
      right: 6.4,
    },
    {
      number: c2,
      size: "medium",
      bottom: 47.5,
      right: 15.5,
    },
    {
      number: c3,
      color: "white",
      size: "small",
      bottom: 48.5,
      right: 22.5,
    },
    {
      number: o,
      size: "small",
      bottom: 42,
      right: 27,
    },
    {
      number: k,
      size: "small",
      bottom: 34.7,
      right: 35.3,
    },
    {
      number: h3,
      size: "small",
      bottom: 29,
      right: 30,
    },
    {
      number: n,
      size: "small",
      bottom: 26.5,
      right: 44.3,
    },
    {
      number: g3,
      size: "small",
      bottom: 29.5,
      left: 26,
    },
    {
      number: h2,

      size: "large",
      bottom: 24.5,
      left: 21.5,
    },
    {
      number: g2,
      size: "large",
      bottom: 24,
      right: 25.5,
    },
    {
      number: d3,
      color: "white",
      size: "small",
      right: 50.5,
      bottom: 21.6,
    },
    {
      number: h1,
      left: 14,
      bottom: 18,
      size: "large",
    },
    {
      number: g1,
      size: "large",
      right: 19,
      bottom: 18,
    },
    {
      number: d2,
      size: "medium",
      right: 50.5,
      bottom: 15,
    },
    {
      number: d1,
      color: "white",
      size: "large",
      right: 50,
      bottom: 5.5,
    },
  ];

  return (
    <>
      {numbersStateArray.map((number, index) => (
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
          className="matrix-img"
        />
        <NumberList />
      </Box>
    </Box>
  );
};

export default MatrixImage;
