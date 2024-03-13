import "./styles/App.css";

import { Box, Button, SxProps, Theme } from "@mui/material";
import theme from "./theme";

import Footer from "./components/Footer";
import Form from "./components/Form";
import { FC } from "react";

const styles: SxProps<Theme> = {
  color: "#c3d4a5",
  fontSize: "30px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
};

export interface State {
  globalName: string;
  globalDate: string;
  setData: React.Dispatch<React.SetStateAction<Omit<State, "setData">>>;
}

const App: FC = () => {
  return (
    <>
      <Box sx={{ minHeight: "100%" }}>
        <Box
          sx={{
            display: "flex",
            columnGap: "70px",
            justifyContent: "center",
            mt: "200px",
            mb: "200px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              mb: "65px",
              mt: 0,
            },
          }}
        >
          <Button
            sx={{
              ...styles,
              background: "#86945e",
              "&:hover": {
                background: "#49592a",
              },
            }}
            variant="contained"
            color="success"
          >
            Matrice <br />
            personale
          </Button>
          <Button sx={{ ...styles }}>
            Matrice di <br />
            compatibilità
          </Button>
        </Box>
        <Form />
        <Footer />
      </Box>
    </>
  );
};

export default App;
