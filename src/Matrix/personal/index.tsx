import { Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { matchaColor as matchColor } from "./styles";
import Footer from "../../components/Footer";
import MatrixTable from "./components/MatrixTable";
import theme from "../../theme";
import "./styles.css";
import MatrixImage from "./components/MatrixImage";
import MatrixHealthMap from "./components/MatrixHealthMap";

const juliSiteLink = "https://mssg.me/juli.matrix/servizi";

const PersonalMatrix = () => {
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
      <RouterLink to="/" style={{ color: matchColor }}>
        <Button
          startIcon={<ArrowBackIosNewRoundedIcon />}
          variant="gradient"
          sx={{ fontSize: "1.2rem" }}
        >
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
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
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
        <Link href={juliSiteLink} style={{ order: 4, marginTop: "30px" }}>
          <Button
            startIcon={<ArrowBackIosNewRoundedIcon />}
            variant="gradient"
            sx={{ fontSize: "1.1rem" }}
          >
            Ordina una consulenza
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default PersonalMatrix;
