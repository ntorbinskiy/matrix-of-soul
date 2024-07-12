import { Button, Box } from "@mui/material";
import { ReactNode, FC, useEffect } from "react";
import CompatibleMatrixPage from "../Matrix/compatible";
import PersonalForm from "../Matrix/personal/components/PersonalForm";
import Footer from "../components/Footer";

import theme from "../theme";
import "../styles/App.css";
import { useSearchParams } from "react-router-dom";
import useSearchParamsState, {
  MatrixType,
} from "../utils/useSearchParamsState";

interface MatrixButtonProps {
  currentType: MatrixType;
  children: ReactNode;
}

const MatrixButton: FC<MatrixButtonProps> = ({ currentType, children }) => {
  const [_, setSearchParams] = useSearchParams();
  const { matrixType } = useSearchParamsState();

  return (
    <Button
      variant={currentType === matrixType ? "default" : "outlined"}
      color="success"
      onClick={() => setSearchParams(`matrixType=${currentType}`)}
    >
      {children}
    </Button>
  );
};

const MatrixTypeButtons: FC = () => {
  return (
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
          mt: "120px",
          alignItems: "center",
        },
        "& > button": {
          width: "280px",
        },
      }}
    >
      <MatrixButton currentType="personal">
        Matrice <br />
        personale
      </MatrixButton>
      <MatrixButton currentType="compatible">
        Matrice di <br />
        compatibilità
      </MatrixButton>
    </Box>
  );
};

const MainPage: FC = () => {
  const { matrixType } = useSearchParamsState();

  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams("matrixType=personal");
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ pb: "150px" }}>
          <MatrixTypeButtons />
          {matrixType === "compatible" ? (
            <CompatibleMatrixPage />
          ) : (
            <PersonalForm />
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainPage;
