import { FC } from "react";
import { useGlobalState } from "../../provider";

import CompatibleMatrixImage from "./CompatibleMatrixImage";
import {
  calculateCompatibleMatrix,
  calculatePersonalMatrix,
} from "../../utils/calculate-matrix";
import PersonalMatrixImage from "./PersonalMatrixImage";
import {
  calculateMatrixPrognosis,
  parsePersonalMatrixToPrognosisArgs,
} from "./calculatePrognosis";

const MatrixImage: FC = () => {
  const { personalDate, matrixType, partnerDate } = useGlobalState();

  const personalMatrix = calculatePersonalMatrix(personalDate);

  const prognosis = calculateMatrixPrognosis(
    parsePersonalMatrixToPrognosisArgs(personalMatrix)
  );

  return (
    <>
      {matrixType === "personal" ? (
        <PersonalMatrixImage
          matrix={calculatePersonalMatrix(personalDate)}
          prognosis={prognosis}
        />
      ) : (
        <CompatibleMatrixImage
          {...calculateCompatibleMatrix(personalDate, partnerDate)}
        />
      )}
    </>
  );
};

export default MatrixImage;
