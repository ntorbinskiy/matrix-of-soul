import {
  CompatibleMatrix,
  calculateNumber,
} from "../../../utils/calculate-matrix";

interface MatrixTable {
  sky: number;
  earth: number;
  skyPlusEarth: number;
  male: number;
  female: number;
  malePlusFemale: number;
  wholeValue: number;
}

export interface MatrixTableArgs {
  a1: number;
  b1: number;
  c1: number;
  d1: number;
  e1: number;
  f1: number;
  g1: number;
  h1: number;
}

export const calculatePersonalMatrixTable = ({
  a1,
  b1,
  c1,
  d1,
  e1,
  f1,
  g1,
  h1,
}: MatrixTableArgs): MatrixTable => {
  const sky = calculateNumber(b1 + d1);
  const earth = calculateNumber(a1 + c1);
  const skyPlusEarth = calculateNumber(sky + earth);

  const male = calculateNumber(e1 + g1);
  const female = calculateNumber(f1 + h1);
  const malePlusFemale = calculateNumber(male + female);

  const wholeValue = calculateNumber(skyPlusEarth + malePlusFemale);

  return { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue };
};

export const calculateCompatibleMatrixTable = (
  personal: MatrixTableArgs,
  partner: MatrixTableArgs
): MatrixTable => {
  const personalMatrixTable = calculatePersonalMatrixTable(personal);
  const partnerMatrixTable = calculatePersonalMatrixTable(partner);

  const earth = calculateNumber(
    personalMatrixTable.earth + partnerMatrixTable.earth
  );

  const sky = calculateNumber(personalMatrixTable.sky + partnerMatrixTable.sky);

  const skyPlusEarth = calculateNumber(earth + sky);

  const male = calculateNumber(
    personalMatrixTable.male + partnerMatrixTable.male
  );

  const female = calculateNumber(
    personalMatrixTable.female + partnerMatrixTable.female
  );

  const malePlusFemale = calculateNumber(male + female);

  const wholeValue = calculateNumber(
    personalMatrixTable.wholeValue + partnerMatrixTable.wholeValue
  );

  return { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue };
};

export const parseMatrixToMatrixTableArgs = (
  matrix: CompatibleMatrix
): MatrixTableArgs => {
  const { a1, b1, c1, d1, e1, f1, g1, h1 } = matrix;

  return { a1, b1, c1, d1, e1, f1, g1, h1 };
};
