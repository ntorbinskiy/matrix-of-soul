import { FC, useEffect, useState } from "react";

import { useGlobalState } from "../../provider";
import { calculatePersonalMatrix } from "../../utils/calculate-matrix";
import {
  parseMatrixToMatrixTableArgs,
  calculatePersonalMatrixTable,
  calculateCompatibleMatrixTable,
} from "./matrix-table-block/calculate-matrix-table";
import { EndingText } from "./matrix-table-block/types";
import MatrixTableView from "./MatrixTableView";

export const MatrixTable: FC = () => {
  const { matrixType, personalDate, partnerDate } = useGlobalState();

  // TODO: refactor this

  const personal = parseMatrixToMatrixTableArgs(
    calculatePersonalMatrix(personalDate)
  );
  const personalMatrixTable = calculatePersonalMatrixTable(personal);

  const [endingText, setEndingText] = useState<EndingText>("Generale:");

  const [wholeValue, setWholeValue] = useState<number>(
    personalMatrixTable.wholeValue
  );

  const partner = parseMatrixToMatrixTableArgs(
    calculatePersonalMatrix(partnerDate)
  );

  const compatibleMatrixTable = calculateCompatibleMatrixTable(
    personal,
    partner
  );

  useEffect(() => {
    if (matrixType === "compatible") {
      setEndingText("Unità:");
      setWholeValue(compatibleMatrixTable.wholeValue);
    }
  }, [compatibleMatrixTable.wholeValue, matrixType]);

  return <MatrixTableView endingText={endingText} wholeValue={wholeValue} />;
};
