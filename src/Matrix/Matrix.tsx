import { Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { linkButton, matchaColor as matchColor } from "./styles";
import Footer, { instagramLink } from "../components/Footer";
import MatrixTable from "./components/MatrixTable";
import theme from "../theme";
import "./styles.css";
import MatrixImage from "./components/MatrixImage";
import MatrixHealthMap from "./components/MatrixHealthMap";

const Matrix = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <RouterLink to="/" style={{ color: matchColor, textDecoration: "none" }}>
        <Button sx={linkButton} startIcon={<ArrowBackIosNewRoundedIcon />}>
          Inserisci un'altra data
        </Button>
      </RouterLink>
      <Box
        sx={{
          display: "flex",
          pb: "150px",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1440px",
          justifyContent: "center",
          [theme.breakpoints.between("xs", "md")]: {
            gap: "20px",
          },
        }}
      >
        <MatrixImage />
        <MatrixHealthMap />
        <Box
          sx={{
            "* > *": {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              [theme.breakpoints.down("sm")]: {
                gap: "0",
              },
            },
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              pt: "50px",
              flexDirection: "column",
            }}
          >
            <MatrixTable />
          </Box>
        </Box>
        <Link
          href={instagramLink}
          style={{ textDecoration: "none", order: 4, marginTop: "30px" }}
        >
          <Button sx={linkButton} startIcon={<ArrowBackIosNewRoundedIcon />}>
            Ordina una consulenza
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default Matrix;
