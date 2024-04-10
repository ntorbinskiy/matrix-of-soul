import { FC } from "react";
import { useGlobalState } from "../../provider";

import CompatibleMatrixImage from "./CompatibleMatrixImage";
import {
  calculateCompatibleMatrix,
  calculatePersonalMatrix,
} from "../../utils/calculate-matrix";
import PersonalMatrixImage from "./PersonalMatrixImage";

const MatrixImage: FC = () => {
  const { personalDate, matrixType, partnerDate } = useGlobalState();

  return (
    <>
      {matrixType === "personal" ? (
        <PersonalMatrixImage {...calculatePersonalMatrix(personalDate)} />
      ) : (
        <CompatibleMatrixImage
          {...calculateCompatibleMatrix(personalDate, partnerDate)}
        />
      )}
    </>
  );
};

export default MatrixImage;
