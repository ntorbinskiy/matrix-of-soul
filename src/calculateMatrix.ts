const calculateNumber = (number: number): number => {
  if (number <= 22) {
    return number;
  }

  const firstNumber = number / 10;
  const secondNumber = number % 10;

  return firstNumber + secondNumber;
};

interface RowA {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
}

interface RowB {
  b1: number;
  b2: number;
  b3: number;
  b4: number;
}

interface RowC {
  c1: number;
  c2: number;
  c3: number;
}

interface RowD {
  d1: number;
  d2: number;
  d3: number;
}

interface RowK {
  k1: number;
  k2: number;
  k3: number;
  k4: number;
}

const calculateRowA = (dayOfBirth: number, centerNumber: number): RowA => {
  const a1 = calculateNumber(dayOfBirth);
  const a3 = calculateNumber(a1 + centerNumber);
  const a2 = calculateNumber(a1 + a3);
  const a4 = calculateNumber(a3 + centerNumber);

  return { a1, a2, a3, a4 };
};

const calculateRowB = (monthOfBirth: number, centerNumber: number): RowB => {
  const b1 = calculateNumber(monthOfBirth);
  const b3 = calculateNumber(b1 + centerNumber);
  const b2 = calculateNumber(b1 + b3);
  const b4 = calculateNumber(b3 + centerNumber);

  return { b1, b2, b3, b4 };
};

const calculateRowC = (yearOfBirth: number, centerNumber: number): RowC => {
  const c1 = calculateNumber(yearOfBirth);
  const c3 = calculateNumber(c1 + centerNumber);
  const c2 = calculateNumber(c1 + c3);

  return { c1, c2, c3 };
};

const calculateRowD = (
  a1: number,
  b1: number,
  c1: number,
  centerNumber: number
): RowD => {
  const d1 = calculateNumber(a1 + b1 + c1);
  const d3 = calculateNumber(d1 + centerNumber);
  const d2 = calculateNumber(d1 + d3);

  return { d1, d2, d3 };
};

const calculateRowK = (c3: number, d3: number): RowK => {
  const k1 = calculateNumber(c3 + d3);

  return { k1 };
};

const calculateNAndO = (k1: number, c3: number, d3: number) => {
  const n = calculateNumber(k1 + d3);
  const k = calculateNumber(k1 + c3);

  return { n, k };
};

const calculateMatrix = () => {
  //   calculateRowA();
};
