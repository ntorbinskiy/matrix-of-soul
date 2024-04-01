export const calculateNumber = (number: number): number => {
  if (number <= 22) {
    return number;
  }

  const firstNumber = Math.floor(number / 10);

  if (number > 1000 && number < 9999) {
    const firstNumber = Math.floor(number / 1000);
    const secondNumber = Math.floor((number / 10) % 10);
    const thirdNumber = Math.floor((number / 100) % 10);
    const forthNumber = number % 10;

    const result = firstNumber + secondNumber + thirdNumber + forthNumber;

    if (result > 22) {
      return Math.floor(result / 10) + Math.floor(result % 10);
    }

    return result;
  }

  const secondNumber = Math.floor(number % 10);

  return firstNumber + secondNumber;
};

interface RowA {
  a2: number;
  a3: number;
  a4: number;
}

interface RowB {
  b2: number;
  b3: number;
  b4: number;
}

interface RowC {
  c2: number;
  c3: number;
}

interface RowD {
  d2: number;
  d3: number;
}

interface RowK {
  k: number;
}

interface CirclesNAndO {
  n: number;
  o: number;
}

interface RowE {
  e1: number;
  e2: number;
  e3: number;
}

interface RowF {
  f1: number;
  f2: number;
  f3: number;
}

interface RowG {
  g1: number;
  g2: number;
  g3: number;
}

interface RowH {
  h1: number;
  h2: number;
  h3: number;
}

export interface PersonalMatrix
  extends RowA,
    RowB,
    RowC,
    RowD,
    RowE,
    RowF,
    RowG,
    RowH,
    RowK,
    CirclesNAndO {
  a1: number;
  b1: number;
  c1: number;
  d1: number;
  centerNumber: number;
}

type CompatibleMatrix = Omit<
  PersonalMatrix,
  "e2" | "e3" | "f2" | "f3" | "g2" | "g3" | "h2" | "h3"
>;

const calculateRowA = (a1: number, centerNumber: number): RowA => {
  const a3 = calculateNumber(a1 + centerNumber);
  const a2 = calculateNumber(a1 + a3);
  const a4 = calculateNumber(a3 + centerNumber);

  return { a2, a3, a4 };
};

const calculateRowB = (b1: number, centerNumber: number): RowB => {
  const b3 = calculateNumber(b1 + centerNumber);
  const b2 = calculateNumber(b1 + b3);
  const b4 = calculateNumber(b3 + centerNumber);

  return { b2, b3, b4 };
};

const calculateRowC = (c1: number, centerNumber: number): RowC => {
  const c3 = calculateNumber(c1 + centerNumber);
  const c2 = calculateNumber(c1 + c3);

  return { c2, c3 };
};

const calculateRowD = (d1: number, centerNumber: number): RowD => {
  const d3 = calculateNumber(d1 + centerNumber);
  const d2 = calculateNumber(d1 + d3);

  return { d2, d3 };
};

const calculateRowK = (c3: number, d3: number): RowK => {
  const k = calculateNumber(c3 + d3);

  return { k };
};

const calculateNAndO = (k: number, c3: number, d3: number): CirclesNAndO => {
  const n = calculateNumber(k + d3);
  const o = calculateNumber(k + c3);

  return { n, o };
};

const calculateRowE = (a1: number, b1: number, centerNumber: number): RowE => {
  const e1 = calculateNumber(a1 + b1);
  const e3 = calculateNumber(e1 + centerNumber);
  const e2 = calculateNumber(e1 + e3);

  return { e1, e2, e3 };
};

const calculateRowF = (c1: number, b1: number, centerNumber: number): RowF => {
  const f1 = calculateNumber(c1 + b1);
  const f3 = calculateNumber(f1 + centerNumber);
  const f2 = calculateNumber(f1 + f3);

  return { f1, f2, f3 };
};

const calculateRowG = (c1: number, d1: number, centerNumber: number): RowG => {
  const g1 = calculateNumber(c1 + d1);
  const g3 = calculateNumber(g1 + centerNumber);
  const g2 = calculateNumber(g1 + g3);

  return { g1, g2, g3 };
};

const calculateRowH = (d1: number, a1: number, centerNumber: number): RowH => {
  const h1 = calculateNumber(a1 + d1);
  const h3 = calculateNumber(h1 + centerNumber);
  const h2 = calculateNumber(h1 + h3);

  return { h1, h2, h3 };
};

export const parseDate = (date: string): Date => {
  const dateArray = date.split("-");
  const day = Number(dateArray[0]);
  const month = Number(dateArray[1]) - 1;
  const year = Number(dateArray[2]);

  return new Date(year, month, day);
};

export const calculatePersonalMatrix = (
  personalDate: string
): PersonalMatrix => {
  const date = parseDate(personalDate);

  const dayOfBirth = date.getDate();
  const monthOfBirth = date.getMonth() + 1;
  const yearOfBirth = date.getFullYear();

  const a1 = calculateNumber(dayOfBirth);
  const b1 = calculateNumber(monthOfBirth);
  const c1 = calculateNumber(yearOfBirth);
  const d1 = calculateNumber(a1 + b1 + c1);
  const centerNumber = calculateNumber(a1 + b1 + c1 + d1);

  const { a2, a3, a4 } = calculateRowA(a1, centerNumber);
  const { b2, b3, b4 } = calculateRowB(b1, centerNumber);
  const { c2, c3 } = calculateRowC(c1, centerNumber);
  const { d2, d3 } = calculateRowD(d1, centerNumber);
  const { e1, e2, e3 } = calculateRowE(a1, b1, centerNumber);
  const { f1, f2, f3 } = calculateRowF(c1, b1, centerNumber);
  const { g1, g2, g3 } = calculateRowG(c1, d1, centerNumber);
  const { h1, h2, h3 } = calculateRowH(d1, a1, centerNumber);
  const { k } = calculateRowK(c3, d3);
  const { n, o } = calculateNAndO(k, c3, d3);

  return {
    a1,
    a2,
    a3,
    a4,
    b1,
    b2,
    b3,
    b4,
    c1,
    c2,
    c3,
    d1,
    d2,
    d3,
    e1,
    e2,
    e3,
    f1,
    f2,
    f3,
    g1,
    g2,
    g3,
    h1,
    h2,
    h3,
    k,
    n,
    o,
    centerNumber,
  };
};

// TODO: refactor duplication of code
const parsePersonalToCompatibleMatrix = (
  matrix: PersonalMatrix
): CompatibleMatrix => {
  const { e2, e3, f2, f3, g2, g3, h2, h3, ...compatibleMatrix } = matrix;

  return compatibleMatrix;
};

export const calculateCompatibleMatrix = (
  personalDate: string,
  partnerDate: string
): CompatibleMatrix => {
  const personalMatrix = parsePersonalToCompatibleMatrix(
    calculatePersonalMatrix(personalDate)
  );

  const partnerMatrix = parsePersonalToCompatibleMatrix(
    calculatePersonalMatrix(partnerDate)
  );

  const a1 = calculateNumber(personalMatrix.a1 + partnerMatrix.a1);
  const b1 = calculateNumber(personalMatrix.b1 + partnerMatrix.b1);
  const c1 = calculateNumber(personalMatrix.c1 + partnerMatrix.c1);
  const d1 = calculateNumber(personalMatrix.d1 + partnerMatrix.d1);

  const centerNumber = calculateNumber(
    personalMatrix.centerNumber + partnerMatrix.centerNumber
  );

  const { a2, a3, a4 } = calculateRowA(a1, centerNumber);
  const { b2, b3, b4 } = calculateRowB(b1, centerNumber);
  const { c2, c3 } = calculateRowC(c1, centerNumber);
  const { d2, d3 } = calculateRowD(d1, centerNumber);

  const e1 = calculateNumber(personalMatrix.e1 + partnerMatrix.e1);
  const f1 = calculateNumber(personalMatrix.f1 + partnerMatrix.f1);
  const g1 = calculateNumber(personalMatrix.g1 + partnerMatrix.g1);
  const h1 = calculateNumber(personalMatrix.h1 + partnerMatrix.h1);

  const { k } = calculateRowK(c3, d3);
  const { n, o } = calculateNAndO(k, c3, d3);

  return {
    a1,
    a2,
    a3,
    a4,
    b1,
    b2,
    b3,
    b4,
    c1,
    c2,
    c3,
    d1,
    d2,
    d3,
    e1,
    f1,
    g1,
    h1,
    k,
    n,
    o,
    centerNumber,
  };
};
