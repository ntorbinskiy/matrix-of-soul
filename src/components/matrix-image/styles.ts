import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import theme from "../../theme";

export const svgIconStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  maxWidth: "800px",
  [theme.breakpoints.up("lg")]: {
    order: 4,
  },

  [`	 & > text[ font-size='21']
  		,& > text[ font-size='30']
  		,& > text[ font-size='40']
  		,& > text[ font-size='35']`]: {
    textAnchor: "middle",
    letterSpacing: "0rem",
  },
};
