import { Box, Button, TextField } from "@mui/material";

import InputMask from "react-input-mask";

import { FormEventHandler, useState } from "react";
import { useGlobalState } from "../../provider";

import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { InputNameField } from "../../components/InputField";
import { Heart } from "./components/Heart";

const CompatibleMatrix = () => {
  const state = useGlobalState();
  const navigate = useNavigate();

  const [personal, setPersonal] = useState<{
    personalName: string;
    personalDate: string;
  }>({ personalName: "", personalDate: "" });

  const [partner, setPartner] = useState<{
    partnerName: string;
    partnerDate: string;
  }>({
    partnerName: "",
    partnerDate: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    state.setData({
      ...state,
      partnerDate: partner.partnerDate,
      partnerName: partner.partnerName,
      personalName: personal.personalName,
      personalDate: personal.personalDate,
    });

    navigate("/result");
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
        component="form"
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InputNameField
              value={personal.personalName}
              onChangeValue={(personalName) =>
                setPersonal({ ...personal, personalName })
              }
            />
            <InputMask
              mask="99/99/9999"
              placeholder="Inserisci la tua data di nascita"
              value={personal.personalDate}
              onChange={(event) =>
                setPersonal({ ...personal, personalDate: event.target.value })
              }
              required
              autoComplete="bday"
            >
              <TextField label={"data di nascita"} sx={{ minWidth: "169px" }} />
            </InputMask>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InputNameField
              value={partner.partnerName}
              onChangeValue={(partnerName) =>
                setPartner({ ...partner, partnerName })
              }
            />
            <InputMask
              mask="99/99/9999"
              placeholder="Inserisci la tua data di nascita"
              value={partner.partnerDate}
              required
              onChange={(event) =>
                setPartner({ ...partner, partnerDate: event.target.value })
              }
              autoComplete="bday"
            >
              <TextField label={"data di nascita"} sx={{ minWidth: "169px" }} />
            </InputMask>
          </Box>
        </Box>
        <Button type="submit" variant="gradient">
          CALCOLARE
        </Button>
      </Box>
    </Box>
  );
};

export default CompatibleMatrix;
