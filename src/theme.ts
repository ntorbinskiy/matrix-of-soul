import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    default: true;
    gradient: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "default" },
          style: {
            background: "#86945e",
            "&:hover": {
              background: "#49592a",
            },
          },
        },
        {
          props: { variant: "gradient" },
          style: {
            background:
              "linear-gradient(101deg,#6e8641,#c3d4a5),linear-gradient(101deg,#fff,hsla(0,0%,100%,.3))",
            color: "white",
            borderRadius: "4px",
            width: "310px",
            height: "62px",
            letterSpacing: ".025em",
            textDecoration: "none",
            fontSize: "1.3rem",
          },
        },
      ],
      styleOverrides: {
        root: {
          color: "#c3d4a5",
          fontSize: "2rem",
        },
      },
    },
  },
});

export default theme;
