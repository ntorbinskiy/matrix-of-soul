import { calculateNumber } from "./calculate-matrix";

interface SecondTable {
  sky: number;
  earth: number;
  skyPlusEarth: number;
  male: number;
  female: number;
  malePlusFemale: number;
  wholeValue: number;
}

export interface SecondTableArgs {
  a1: number;
  b1: number;
  c1: number;
  d1: number;
  e1: number;
  f1: number;
  g1: number;
  h1: number;
}

export const calculateSecondTable = ({
  a1,
  b1,
  c1,
  d1,
  e1,
  f1,
  g1,
  h1,
}: SecondTableArgs): SecondTable => {
  const sky = calculateNumber(b1 + d1);
  const earth = calculateNumber(a1 + c1);
  const skyPlusEarth = calculateNumber(sky + earth);

  const male = calculateNumber(e1 + g1);
  const female = calculateNumber(f1 + h1);
  const malePlusFemale = calculateNumber(male + female);

  const wholeValue = calculateNumber(skyPlusEarth + malePlusFemale);

  return { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue };
};

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
