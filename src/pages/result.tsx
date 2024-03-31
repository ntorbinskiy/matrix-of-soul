import { Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { MatrixHealthMap } from "../Matrix/personal/components/matrix-health-map/MatrixHealthMap";
import MatrixImage from "../Matrix/personal/components/MatrixImage";
import MatrixTable from "../Matrix/personal/components/MatrixTable";
import Footer from "../components/Footer";
import theme from "../theme";
import { matchaColor } from "../Matrix/personal/styles";
import { FC } from "react";
import { useGlobalState } from "../provider";
import BDayTableBlock from "../components/BDayTableBlock";

const juliSiteLink = "https://mssg.me/juli.matrix/servizi";

const PersonalMatrixResult = () => {
  return (
    <>
      <MatrixImage />
      <MatrixHealthMap />
      <Box
        sx={{
          "* > *": {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              gap: "0",
            },
          },
          display: "flex",
          flexWrap: "wrap",
          [theme.breakpoints.down("lg")]: {
            width: "100%",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            pt: "50px",
            flexDirection: "column",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
            },
          }}
        >
          <MatrixTable />
        </Box>
      </Box>
    </>
  );
};

const CompatibleMatrixResult = () => {
  const { partnerDate, partnerName, personalDate, personalName } =
    useGlobalState();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          mt: "20px",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            width: "100%",
          },
        }}
      >
        <BDayTableBlock date={personalDate} name={personalName} />
        <BDayTableBlock date={partnerDate} name={partnerName} />
      </Box>
      <MatrixImage />
    </>
  );
};

const ResultContent: FC = () => {
  const { matrixType } = useGlobalState();

  return (
    <>
      {matrixType === "compatible" ? (
        <CompatibleMatrixResult />
      ) : (
        <PersonalMatrixResult />
      )}
    </>
  );
};

const ResultPage = () => {
  const { matrixType } = useGlobalState();

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
      <RouterLink to="/" style={{ color: matchaColor }}>
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
          justifyContent: "center",
          flexDirection: matrixType === "personal" ? "row" : "column",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            gap: "20px",
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1440px",
          },
        }}
      >
        <ResultContent />
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

export default ResultPage;
