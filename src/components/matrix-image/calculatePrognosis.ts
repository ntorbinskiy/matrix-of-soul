import { PersonalMatrix, calculateNumber } from "../../utils/calculate-matrix";

interface Prognosis {
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  number6: number;
  number7: number;
}

const calculatePrognosis = (
  firstCircleNumber: number,
  secondCircleNumber: number
): Prognosis => {
  const number4 = calculateNumber(firstCircleNumber + secondCircleNumber);

  const number2 = calculateNumber(number4 + firstCircleNumber);
  const number1 = calculateNumber(number2 + firstCircleNumber);
  const number3 = calculateNumber(number2 + number4);

  const number6 = calculateNumber(number4 + secondCircleNumber);
  const number5 = calculateNumber(number6 + number4);
  const number7 = calculateNumber(number6 + secondCircleNumber);

  return {
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
  };
};

export interface MatrixPrognosis {
  ae: Prognosis;
  eb: Prognosis;
  bf: Prognosis;
  fc: Prognosis;
  cg: Prognosis;
  gd: Prognosis;
  dh: Prognosis;
  ha: Prognosis;
}

interface MatrixPrognosisArgs {
  a1: number;
  e1: number;
  b1: number;
  f1: number;
  c1: number;
  g1: number;
  d1: number;
  h1: number;
}

export const calculateMatrixPrognosis = ({
  a1,
  b1,
  c1,
  d1,
  e1,
  f1,
  g1,
  h1,
}: MatrixPrognosisArgs): MatrixPrognosis => {
  return {
    ae: calculatePrognosis(a1, e1),
    bf: calculatePrognosis(b1, f1),
    cg: calculatePrognosis(c1, g1),
    dh: calculatePrognosis(d1, h1),
    eb: calculatePrognosis(e1, b1),
    fc: calculatePrognosis(f1, c1),
    gd: calculatePrognosis(g1, d1),
    ha: calculatePrognosis(h1, a1),
  };
};

export const parsePersonalMatrixToPrognosisArgs = ({
  a1,
  b1,
  c1,
  d1,
  e1,
  f1,
  g1,
  h1,
}: PersonalMatrix): MatrixPrognosisArgs => ({ a1, b1, c1, d1, e1, f1, g1, h1 });
