import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ChacraTypes, calculateHealthMap } from "./calculate-health-map";
import { calculatePersonalMatrix } from "../../../../utils/calculate-matrix";
import { useGlobalState } from "../../../../provider";
import { FC } from "react";
import theme from "../../../../theme";
import { matchaColor } from "../../styles";
import MatrixHealthMapView from "./MatrixHealthMapView";

const chacraToColorsMap: Record<ChacraTypes, string> = {
  [ChacraTypes.chacra1]: "rgb(220, 147, 246)",
  [ChacraTypes.chacra2]: "rgb(110, 115, 241)",
  [ChacraTypes.chacra3]: "rgb(120, 234, 234)",
  [ChacraTypes.chacra4]: "rgb(165, 239, 119)",
  [ChacraTypes.chacra5]: "rgb(248, 233, 103)",
  [ChacraTypes.chacra6]: "rgb(251, 170, 75)",
  [ChacraTypes.chacra7]: "rgb(245, 69, 69)",
  [ChacraTypes.chacra8]: "transparent",
};

const chacraToNamesMap: Record<ChacraTypes, string> = {
  [ChacraTypes.chacra1]: "Sahasrara",
  [ChacraTypes.chacra2]: "Ajna",
  [ChacraTypes.chacra3]: "Vishudha",
  [ChacraTypes.chacra4]: "Anahata",
  [ChacraTypes.chacra5]: "Manipura",
  [ChacraTypes.chacra6]: "Swadhisthana",
  [ChacraTypes.chacra7]: "Muladhara",
  [ChacraTypes.chacra8]: "Generale:",
};

export const MatrixHealthRows: FC = () => {
  const { personalDate } = useGlobalState();

  const { a1, a2, a3, a4, b1, b2, b3, b4, c1, c3, d1, d3, centerNumber } =
    calculatePersonalMatrix(personalDate);

  const rows = calculateHealthMap({
    a1,
    a2,
    a3,
    a4,
    b1,
    b2,
    b3,
    b4,
    c1,
    c3,
    centerNumber,
    d1,
    d3,
  });

  return (
    <>
      {rows.map((row, index) => (
        <TableRow
          key={index}
          sx={{
            "&:nth-of-type(2n + 2) td,&:nth-of-type(2n + 2) th": {
              background: "rgb(247 245 255)",
            },
            "& td, & th": {
              border: "1px solid rgba(224, 224, 224, 1)",
            },
            "&:last-of-type th:first-of-type": {
              borderBottomLeftRadius: "22px",
            },

            "&:last-of-type td:last-of-type": {
              borderBottomRightRadius: "22px",
            },
          }}
        >
          <TableCell
            component="th"
            scope="row"
            sx={{
              background: `${chacraToColorsMap[row.chacraType]} !important`,
            }}
          />
          <TableCell
            align="right"
            sx={{
              fontSize: "18px",
              color: "rgb(95, 95, 95)",
              fontWeight: "600",
            }}
          >
            {chacraToNamesMap[row.chacraType]}
          </TableCell>
          <TableCell align="center">
            <Box>{row.physics}</Box>
          </TableCell>
          <TableCell align="center">{row.energy}</TableCell>
          <TableCell align="center">{row.emotion}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export const MatrixHealthMap: FC = () => {
  return <MatrixHealthMapView />;
};
