import { calculateNumber } from "./calculate-matrix";

export interface ISecondTable {
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
}: SecondTableArgs): ISecondTable => {
  const sky = calculateNumber(b1 + d1);
  const earth = calculateNumber(a1 + c1);
  const skyPlusEarth = calculateNumber(sky + earth);

  const male = calculateNumber(e1 + g1);
  const female = calculateNumber(f1 + h1);
  const malePlusFemale = calculateNumber(male + female);

  const wholeValue = calculateNumber(skyPlusEarth + malePlusFemale);

  return { earth, sky, skyPlusEarth, male, female, malePlusFemale, wholeValue };
};
