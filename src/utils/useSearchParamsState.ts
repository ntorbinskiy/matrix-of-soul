import { useSearchParams } from "react-router-dom";

export type MatrixType = "personal" | "compatible";

interface State {
  personalName: string;
  personalDate: string;
  partnerName: string;
  partnerDate: string;
  matrixType: MatrixType;
}

const useSearchParamsState = (): State => {
  const [searchParams] = useSearchParams();

  const getParam = (value: string): string => {
    return searchParams.get(value) ?? "";
  };

  const narrowMatrixTypeString = (value: string): value is MatrixType =>
    value === "compatible" || value === "personal";

  const matrixTypeParam = getParam("matrixType");

  const matrixType: MatrixType = narrowMatrixTypeString(matrixTypeParam)
    ? matrixTypeParam
    : "compatible";

  return {
    matrixType,
    personalDate: getParam("personalDate"),
    personalName: getParam("personalName"),
    partnerDate: getParam("partnerDate"),
    partnerName: getParam("partnerName"),
  };
};

export default useSearchParamsState;
