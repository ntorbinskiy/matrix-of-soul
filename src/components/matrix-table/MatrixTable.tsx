import { FC, useEffect, useState } from "react";

import {
  calculateCompatibleMatrix,
  calculatePersonalMatrix,
} from "../../utils/calculate-matrix";
import {
  parseMatrixToMatrixTableArgs,
  calculatePersonalMatrixTable,
} from "./matrix-table-block/calculate-matrix-table";
import { EndingText } from "./matrix-table-block/types";
import MatrixTableView from "./MatrixTableView";
import useSearchParamsState from "../../utils/useSearchParamsState";

export const MatrixTable: FC = () => {
  const { matrixType, personalDate, partnerDate } = useSearchParamsState();

  // TODO: refactor this

  const personal = parseMatrixToMatrixTableArgs(
    calculatePersonalMatrix(personalDate)
  );
  const personalMatrixTable = calculatePersonalMatrixTable(personal);

  const [endingText, setEndingText] = useState<EndingText>("Generale:");

  const [wholeValue, setWholeValue] = useState<number>(
    personalMatrixTable.wholeValue
  );

  const compatibleMatrixTable = calculatePersonalMatrixTable(
    parseMatrixToMatrixTableArgs(
      calculateCompatibleMatrix(personalDate, partnerDate)
    )
  );

  useEffect(() => {
    if (matrixType === "compatible") {
      setEndingText("Unità:");
      setWholeValue(compatibleMatrixTable.wholeValue);
    }
  }, [compatibleMatrixTable.wholeValue, matrixType]);

  return <MatrixTableView endingText={endingText} wholeValue={wholeValue} />;
};
