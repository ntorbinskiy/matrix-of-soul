import {
  Box,
  Button,
  FormControl,
  SvgIcon,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { FC } from "react";

interface HeartProps {
  sx: SxProps<Theme>;
}

const Heart: FC<HeartProps> = (props) => (
  <SvgIcon sx={props.sx} viewBox="0 0 103 83">
    <svg
      width="103"
      height="83"
      viewBox="0 0 103 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7821 0.113358C14.1845 0.990789 5.6577 7.15614 1.99692 15.8649C-1.71312 24.6907 -0.177849 34.8265 5.97219 42.1085C6.4237 42.6432 16.441 52.5126 28.2327 64.0403L45.9327 81.3442C48.0488 83.413 51.3615 83.5061 53.566 81.5318C64.6074 71.6436 94.8684 44.3888 95.6053 43.6473C103.256 35.9486 105.178 24.2884 100.395 14.5936C98.9706 11.707 97.306 9.45373 94.957 7.2328C87.8717 0.533742 77.6794 -1.71608 68.2792 1.34396C60.7506 3.79473 54.5435 9.75718 51.8883 17.0885L51.4938 18.1778L51.0369 16.9497C49.0804 11.6908 45.4781 7.26321 40.6072 4.1311C35.7836 1.02912 29.6878 -0.42646 23.7821 0.113358Z"
        fill="#74a12e"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7821 0.113358C14.1845 0.990789 5.6577 7.15614 1.99692 15.8649C-1.71312 24.6907 -0.177849 34.8265 5.97219 42.1085C6.4237 42.6432 16.441 52.5126 28.2327 64.0403L45.9327 81.3442C48.0488 83.413 51.3615 83.5061 53.566 81.5318C64.6074 71.6436 94.8684 44.3888 95.6053 43.6473C103.256 35.9486 105.178 24.2884 100.395 14.5936C98.9706 11.707 97.306 9.45373 94.957 7.2328C87.8717 0.533742 77.6794 -1.71608 68.2792 1.34396C60.7506 3.79473 54.5435 9.75718 51.8883 17.0885L51.4938 18.1778L51.0369 16.9497C49.0804 11.6908 45.4781 7.26321 40.6072 4.1311C35.7836 1.02912 29.6878 -0.42646 23.7821 0.113358Z"
        fill="url(#paint0_linear_4_5257)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7821 0.113358C14.1845 0.990789 5.6577 7.15614 1.99692 15.8649C-1.71312 24.6907 -0.177849 34.8265 5.97219 42.1085C6.4237 42.6432 16.441 52.5126 28.2327 64.0403L45.9327 81.3442C48.0488 83.413 51.3615 83.5061 53.566 81.5318C64.6074 71.6436 94.8684 44.3888 95.6053 43.6473C103.256 35.9486 105.178 24.2884 100.395 14.5936C98.9706 11.707 97.306 9.45373 94.957 7.2328C87.8717 0.533742 77.6794 -1.71608 68.2792 1.34396C60.7506 3.79473 54.5435 9.75718 51.8883 17.0885L51.4938 18.1778L51.0369 16.9497C49.0804 11.6908 45.4781 7.26321 40.6072 4.1311C35.7836 1.02912 29.6878 -0.42646 23.7821 0.113358Z"
        fill="url(#paint1_linear_4_5257)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7821 0.113358C14.1845 0.990789 5.6577 7.15614 1.99692 15.8649C-1.71312 24.6907 -0.177849 34.8265 5.97219 42.1085C6.4237 42.6432 16.441 52.5126 28.2327 64.0403L45.9327 81.3442C48.0488 83.413 51.3615 83.5061 53.566 81.5318C64.6074 71.6436 94.8684 44.3888 95.6053 43.6473C103.256 35.9486 105.178 24.2884 100.395 14.5936C98.9706 11.707 97.306 9.45373 94.957 7.2328C87.8717 0.533742 77.6794 -1.71608 68.2792 1.34396C60.7506 3.79473 54.5435 9.75718 51.8883 17.0885L51.4938 18.1778L51.0369 16.9497C49.0804 11.6908 45.4781 7.26321 40.6072 4.1311C35.7836 1.02912 29.6878 -0.42646 23.7821 0.113358Z"
        fill="url(#paint2_linear_4_5257)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_5257"
          x1="-5.69174e-07"
          y1="27.0804"
          x2="87.1464"
          y2="82.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c3d4a5" />
          <stop offset="1" stopColor="#c3d4a5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_5257"
          x1="11.5422"
          y1="79.5754"
          x2="32.9326"
          y2="24.2459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#cdd0c0" />
          <stop offset="1" stopColor="#cdd0c0" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4_5257"
          x1="161.099"
          y1="79.534"
          x2="57.6401"
          y2="-15.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c3d4a5" />
          <stop offset="1" stopColor="#c3d4a5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </SvgIcon>
);

const DateInput = () => {
  return (
    <TextField placeholder="Inserisci la tua data di nascita" type="date" />
  );
};

const NameInput = () => {
  return (
    <Box>
      <TextField label="Nome" placeholder="Inserisci il tuo nome" />
    </Box>
  );
};

const Form = () => (
  <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    <Heart sx={{ width: "50px", height: "50px", mb: "25px" }} />
    <FormControl sx={{ alignItems: "center" }}>
      <NameInput />
      <DateInput />
      <Button
        sx={{
          background:
            "linear-gradient(101deg,#6e8641,#c3d4a5),linear-gradient(101deg,#fff,hsla(0,0%,100%,.3))",
          color: "white",
          border: "3px solid transparent",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box,border-box",
          WebkitBackdropFilter: "blur(47.275px)",
          backdropFilter: "blur(47.275px)",
          borderRadius: "15px",
          width: "310px",
          height: "62px",
          fontSize: "26px",
          letterSpacing: ".025em",
        }}
      >
        CALCOLARE
      </Button>
    </FormControl>
  </Box>
);

export default Form;
