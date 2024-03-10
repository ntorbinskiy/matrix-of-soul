import { createTheme } from "@mui/material";

interface CustomColorsPalette {
  main: {
    matcha: "#74a12e";
  };
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomColorsPalette {}
  interface PaletteOptions extends CustomColorsPalette {}
}

const colors: CustomColorsPalette["main"] = {
  matcha: "#74a12e",
};

export const theme = createTheme({
  palette: {
    main: colors,
  },
});
