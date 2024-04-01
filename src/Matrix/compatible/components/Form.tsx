import { Box, Button } from "@mui/material";
import { FC, FormEventHandler, useState } from "react";
import { InputNameField, InputDateField } from "../../../components/InputField";
import theme from "../../../theme";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalState } from "../../../provider";

const CompatibleForm: FC = () => {
  const state = useGlobalState();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
    const compatibleQueryParams = `type=compatible
	&personalName=${personal.personalName}
	&personalDate=${personal.personalDate}
	&partnerName=${partner.partnerName}
	&partnerDate=${partner.partnerDate}`;

    event.preventDefault();

    // state.setData({
    //   ...state,
    //   partnerDate: partner.partnerDate,
    //   partnerName: partner.partnerName,
    //   personalName: personal.personalName,
    //   personalDate: personal.personalDate,
    // });

    navigate("/result");

    setSearchParams(compatibleQueryParams);
  };

  return (
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

          <InputDateField
            value={personal.personalDate}
            onChangeValue={(personalDate) =>
              setPersonal({ ...personal, personalDate })
            }
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <InputNameField
            value={partner.partnerName}
            onChangeValue={(partnerName) =>
              setPartner({ ...partner, partnerName })
            }
          />
          <InputDateField
            value={partner.partnerDate}
            onChangeValue={(partnerDate) =>
              setPartner({ ...partner, partnerDate })
            }
          />
        </Box>
      </Box>
      <Button type="submit" variant="gradient">
        CALCOLARE
      </Button>
    </Box>
  );
};

export default CompatibleForm;
