import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import theme from "../../../../theme";
import { matchaColor } from "../../styles";
import { MatrixHealthRows } from "./MatrixHealthMap";

const MatrixHealthMapView = () => {
  return (
    <>
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
            <MatrixHealthRows />
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default MatrixHealthMapView;
