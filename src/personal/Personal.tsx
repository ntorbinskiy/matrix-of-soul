import { Box, Button, SxProps, Theme } from "@mui/material";
import Form from "../components/Form";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { theme } from "../theme";

const styles: SxProps<Theme> = {
  color: "#74a12e",
  fontSize: "30px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
};

const Personal = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          columnGap: "70px",
          justifyContent: "center",
          mt: "200px",
          mb: "200px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Button sx={styles}>
          Matrice <br />
          personale
        </Button>
        <Button sx={styles}>
          Matrice di <br />
          compatibilità
        </Button>
      </Box>
      <Form />
      <Footer />
      {/* <Matrix /> */}
    </Box>
  );
};

export default Personal;
