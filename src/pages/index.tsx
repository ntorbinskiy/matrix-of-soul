import { Button, Box } from "@mui/material";
import { ReactNode, FC } from "react";
import CompatibleMatrix from "../Matrix/compatible";
import PersonalForm from "../Matrix/personal/components/PersonalForm";
import Footer from "../components/Footer";
import { MatrixType } from "../provider";
import theme from "../theme";
import "../styles/App.css";
import { useSearchParams } from "react-router-dom";

interface MatrixButtonProps {
  currentType: MatrixType;
  children: ReactNode;
}

const MatrixButton: FC<MatrixButtonProps> = ({ currentType, children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const matrixType = searchParams.get("type");

  return (
    <Button
      variant={currentType === matrixType ? "default" : "outlined"}
      color="success"
      onClick={() => setSearchParams(`type=${currentType}`)}
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
  const [searchParams] = useSearchParams();

  const matrixType = searchParams.get("type");

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
          {matrixType === "personal" ? <PersonalForm /> : <CompatibleMatrix />}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainPage;
