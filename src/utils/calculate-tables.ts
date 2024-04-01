import { calculateNumber } from "./calculate-matrix";

interface ThirdTable {
  male1: number;
  male2: number;
  male3: number;
  female1: number;
  female2: number;
  female3: number;
  malePlusFemale: number;
}

export interface ThirdTableArgs {
  e1: number;
  f1: number;
  g1: number;
  h1: number;
}

export const calculateThirdTable = ({
  e1,
  f1,
  g1,
  h1,
}: ThirdTableArgs): ThirdTable => ({
  male1: e1,
  male2: g1,
  male3: calculateNumber(e1 + g1),
  female1: f1,
  female2: h1,
  female3: calculateNumber(f1 + h1),
  malePlusFemale: calculateNumber(e1 + f1 + g1 + h1),
});
