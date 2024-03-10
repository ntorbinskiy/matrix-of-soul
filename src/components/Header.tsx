import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box component="header">
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: "40px",
          fontFamily: "KyivTypeSans-M3 !important",
          color: "rgb(95 95 95/1)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
        variant="h1"
      >
        juli matrix
      </Typography>
    </Box>
  );
};

export default Header;
