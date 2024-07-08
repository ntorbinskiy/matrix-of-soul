import { Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { MatrixHealthMap } from "../Matrix/personal/components/matrix-health-map/MatrixHealthMap";
import MatrixImage from "../components/matrix-image/MatrixImage";
import MatrixTables from "../Matrix/personal/components/MatrixTable";
import Footer from "../components/Footer";
import theme from "../theme";
import { matchaColor } from "../Matrix/personal/styles";
import { FC } from "react";

import BDayTable from "../components/BDayTable";
import { MatrixTable } from "../components/matrix-table/MatrixTable";
import useSearchParamsState from "../utils/useSearchParamsState";

const juliSiteLink = "https://mssg.me/juli.matrix/servizi";

const PersonalMatrixResult = () => (
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
            pt: 0,
          },
        }}
      >
        <MatrixTables />
      </Box>
    </Box>
  </>
);

const CompatibleMatrixResult = () => {
  const { partnerDate, partnerName, personalDate, personalName } =
    useSearchParamsState();

  return (
    <>
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
        <BDayTable date={personalDate} name={personalName} />
        <BDayTable date={partnerDate} name={partnerName} />
        <MatrixTable />
      </Box>
      <MatrixImage />
    </>
  );
};

const ResultContent: FC = () => {
  const { matrixType } = useSearchParamsState();

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
  const { matrixType } = useSearchParamsState();

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
