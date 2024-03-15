import { SxProps, Theme } from "@mui/material";
import theme from "../theme";

export const matchaColor = "#74a12e";

export const boxStyles: SxProps<Theme> = {
  display: "flex",
  height: "240px",
  flexWrap: "wrap",
  border: "3px solid #74a12e",
  borderRadius: "22px",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
};

export const textStyles: SxProps<Theme> = {
  fontSize: "22px",
  color: matchaColor,
  fontWeight: 600,
};

export const dFlexColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const blackText: SxProps<Theme> = {
  fontSize: "19px",
};

export const linkButton: SxProps<Theme> = {
  background:
    "linear-gradient(101deg,#6e8641,#c3d4a5),linear-gradient(101deg,#fff,hsla(0,0%,100%,.3))",
  color: "white",
  border: "3px solid transparent",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box,border-box",
  WebkitBackdropFilter: "blur(47.275px)",
  backdropFilter: "blur(47.275px)",
  borderRadius: "15px",
  width: "310px",
  height: "62px",
  letterSpacing: ".025em",
  textDecoration: "none",
};

export const circleItemStyles: SxProps<Theme> = {
  width: "35px",
  borderRadius: "50%",
  border: "2px solid grey",
  height: "35px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "24px",
    height: "24px",
    fontSize: "15px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "24px",
    height: "24px",
  },
};

export const setCircledNumbersStyles = (selector: string): SxProps<Theme> => ({
  ...blackText,
  display: "flex",
  alignItems: "center",
  [selector]: circleItemStyles,
});
