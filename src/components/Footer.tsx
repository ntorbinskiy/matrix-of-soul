import { Box, Link, SxProps, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Theme } from "@emotion/react";
import theme from "../theme";
import { matchaColor } from "../Matrix/styles";

const telegramLink = "https://t.me/julimatrix";
export const instagramLink = "https://www.instagram.com/juli.matrix/";

const styles: SxProps<Theme> = {
  fontSize: "30px",
  textDecoration: "none",
  color: matchaColor,
  display: "flex",
  gap: "12px",
  "& svg": {
    fontSize: "30px",
  },
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    "& span": {
      display: "none",
    },
  },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: "35px",
        backgroundColor: "white",
        boxShadow: "0 4px 39px 0 rgba(0,0,0,0.17)",
        paddingBottom: "25px",
        position: "absolute",
        width: "100%",
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          ml: "auto",
          mr: "auto",
          maxWidth: "1440px",
        }}
      >
        <Link href={telegramLink} sx={styles}>
          <TelegramIcon />
          <Box component="span">julimatrix</Box>
        </Link>
        <Link href={instagramLink} sx={styles}>
          <InstagramIcon />
          <Box component="span">julimatrix</Box>
        </Link>
        <Typography
          sx={{
            color: matchaColor,
            fontSize: "40px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "30px",
            },
          }}
        >
          JULI MATRIX
        </Typography>
      </Box>
    </Box>
  );
};

// TODO: Add hover effect on links

export default Footer;
