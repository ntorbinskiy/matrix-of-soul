import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { calculateHealthMap } from "../../utils/calculate-health-map";
import { calculateMatrix } from "../../utils/calculate-matrix";
import { useGlobalState } from "../../provider";
import { FC } from "react";
import theme from "../../theme";
import { matchaColor } from "../styles";

export const MatrixHealthMap: FC = () => {
  const { globalDate } = useGlobalState();

  const { a1, a2, a3, a4, b1, b2, b3, b4, c1, c3, d1, d3, centerNumber } =
    calculateMatrix(globalDate);

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
    <Box sx={{ order: "3" }}>
      <Typography
        sx={{
          color: matchaColor,
          mb: "10px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },
          display: "flex",
          justifyContent: "center",
        }}
        variant="h4"
      >
        TESSERA SANITARIA
      </Typography>
      <Table
        sx={{
          width: "450px",
          height: "518px",
          borderRadius: "22px",
          border: "3px solid #74a12e",
          borderCollapse: "separate",
          [theme.breakpoints.down("sm")]: {
            "& td, & th": {
              padding: "5px",
            },
            width: "unset",
            height: "unset",
          },
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              "& td, & th": {
                border: "1px solid rgba(224, 224, 224, 1)",
                background: "rgb(247 245 255)",
              },
              "&:first-of-type th:first-of-type": {
                borderTopLeftRadius: "22px",
              },

              "&:first-of-type th:last-of-type": {
                borderTopRightRadius: "22px",
              },
            }}
          >
            <TableCell></TableCell>
            <TableCell>Il nome del chakra</TableCell>
            <TableCell align="center">Fisica</TableCell>
            <TableCell align="center">Energia</TableCell>
            <TableCell align="center">Emozione</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                sx={{ background: `${row.color} !important` }}
              />
              <TableCell
                align="right"
                sx={{
                  fontSize: "18px",
                  color: "rgb(95, 95, 95)",
                  fontWeight: "600",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Box>{row.physics}</Box>
              </TableCell>
              <TableCell align="center">{row.energy}</TableCell>
              <TableCell align="center">{row.emotion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default MatrixHealthMap;
