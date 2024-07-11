import { Box, Link, SxProps, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Theme } from "@emotion/react";
import theme from "../theme";
import { matchaColor } from "../Matrix/personal/styles";
import { Link as RouterLink } from "react-router-dom";

const telegramLink = "https://t.me/ijolli";
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
        width: "calc(100% + 40px)",
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
          "& > a,p": {
            transition: "all 0.5s ease-out",
          },

          "&> a:hover,p:hover": {
            color: "#000000",
          },
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
        <RouterLink to="/">
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
        </RouterLink>
      </Box>
    </Box>
  );
};

export default Footer;
