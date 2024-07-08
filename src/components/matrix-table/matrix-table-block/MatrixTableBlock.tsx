import { FC, useState, useEffect } from "react";

import {
  calculateCompatibleMatrix,
  calculatePersonalMatrix,
} from "../../../utils/calculate-matrix";
import {
  calculatePersonalMatrixTable,
  parseMatrixToMatrixTableArgs,
} from "./calculate-matrix-table";
import { MatrixTableBlockView } from "./MatrixTableBlockView";
import { Label, SecondLabel, ThirdLabel } from "./types";
import useSearchParamsState from "../../../utils/useSearchParamsState";

interface MatrixTableBlockProps {
  type: "personal" | "social";
}

interface Circles {
  circle1: number;
  circle2: number;
  circle3: number;
}

export const MatrixTableBlock: FC<MatrixTableBlockProps> = (props) => {
  const { matrixType, personalDate, partnerDate } = useSearchParamsState();

  const personal = parseMatrixToMatrixTableArgs(
    calculatePersonalMatrix(personalDate)
  );
  const { earth, sky, skyPlusEarth, male, female, malePlusFemale } =
    calculatePersonalMatrixTable(personal);

  const [label, setLabel] = useState<Label>("Personale:");

  const [secondLabel, setSecondLabel] = useState<SecondLabel>("Terra:");
  const [thirdLabel, setThirdLabel] = useState<ThirdLabel>("Cielo:");

  const [circles, setCircles] = useState<Circles>({
    circle1: earth,
    circle2: sky,
    circle3: skyPlusEarth,
  });

  useEffect(() => {
    const compatibleMatrixTable = calculatePersonalMatrixTable(
      parseMatrixToMatrixTableArgs(
        calculateCompatibleMatrix(personalDate, partnerDate)
      )
    );

    if (props.type === "social") {
      setSecondLabel("Donna:");
      setThirdLabel("Uomo:");

      if (matrixType === "personal") {
        setLabel("Sociale:");
        setCircles({ circle1: male, circle2: female, circle3: malePlusFemale });
      }

      if (matrixType === "compatible") {
        setLabel("Partenariato:");
        setCircles({
          circle1: compatibleMatrixTable.male,
          circle2: compatibleMatrixTable.female,
          circle3: compatibleMatrixTable.malePlusFemale,
        });
      }
    }

    if (matrixType === "compatible" && props.type === "personal") {
      setLabel("Rapporto:");
      setCircles({
        circle1: compatibleMatrixTable.sky,
        circle2: compatibleMatrixTable.earth,
        circle3: compatibleMatrixTable.skyPlusEarth,
      });
    }
  }, [
    female,
    male,
    malePlusFemale,
    matrixType,
    partnerDate,
    personalDate,
    props.type,
  ]);

  return (
    <MatrixTableBlockView
      circle1={circles.circle1}
      circle2={circles.circle2}
      circle3={circles.circle3}
      label={label}
      secondLabel={secondLabel}
      thirdLabel={thirdLabel}
    />
  );
};
