import { calculateNumber } from "./utils/calculate-matrix";

describe("calculate number", () => {
  test("11 -> 11", () => {
    expect(calculateNumber(11)).toBe(11);
  });

  test("23 -> 5", () => {
    expect(calculateNumber(23)).toBe(5);
  });

  test("1001 -> 2", () => {
    expect(calculateNumber(1001)).toBe(2);
  });
});
