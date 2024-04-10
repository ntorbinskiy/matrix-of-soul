import { Box } from "@mui/material";

import { Heart } from "./components/Heart";
import CompatibleForm from "./components/Form";

const CompatibleMatrixPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Heart sx={{ width: " 80px", height: "80px" }} />
      <CompatibleForm />
    </Box>
  );
};

export default CompatibleMatrixPage;
