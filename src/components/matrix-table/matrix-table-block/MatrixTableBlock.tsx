import { FC, useState, useEffect } from "react";

import { useGlobalState } from "../../../provider";

import { calculatePersonalMatrix } from "../../../utils/calculate-matrix";
import {
  calculateCompatibleMatrixTable,
  calculatePersonalMatrixTable,
  parseMatrixToMatrixTableArgs,
} from "./calculate-matrix-table";
import { MatrixTableBlockView } from "./MatrixTableBlockView";

type PersonalLabel = "Personale:" | "Sociale:";

type CompatibleLabel = "Rapporto:" | "Partenariato:";

type Label = PersonalLabel | CompatibleLabel;

type SecondLabel = "Cielo:" | "Uomo:";
type ThirdLabel = "Terra:" | "Donna:";

// type EndingText = "Generale:" | "Unità:";

interface MatrixTableBlockProps {
  type: "personal" | "social";
}

interface Circles {
  circle1: number;
  circle2: number;
  circle3: number;
}

export const MatrixTableBlock: FC<MatrixTableBlockProps> = (props) => {
  const { matrixType, personalDate, partnerDate } = useGlobalState();

  const personal = parseMatrixToMatrixTableArgs(
    calculatePersonalMatrix(personalDate)
  );
  const { earth, sky, skyPlusEarth, male, female, malePlusFemale } =
    calculatePersonalMatrixTable(personal);

  const [label, setLabel] = useState<Label>("Personale:");

  const [secondLabel, setSecondLabel] = useState<SecondLabel>("Cielo:");
  const [thirdLabel, setThirdLabel] = useState<ThirdLabel>("Terra:");
  //   const [endingText, setEndingText] = useState<EndingText>();

  const [circles, setCircles] = useState<Circles>({
    circle1: earth,
    circle2: sky,
    circle3: skyPlusEarth,
  });

  useEffect(() => {
    if (matrixType === "personal" && props.type === "social") {
      setLabel("Sociale:");
      setSecondLabel("Uomo:");
      setThirdLabel("Donna:");
      setCircles({ circle1: male, circle2: female, circle3: malePlusFemale });
    }

    const partner = parseMatrixToMatrixTableArgs(
      calculatePersonalMatrix(partnerDate)
    );

    const compatibleMatrixTable = calculateCompatibleMatrixTable(
      personal,
      partner
    );

    if (matrixType === "compatible" && props.type === "personal") {
      setLabel("Rapporto:");
      setCircles({
        circle1: compatibleMatrixTable.sky,
        circle2: compatibleMatrixTable.earth,
        circle3: compatibleMatrixTable.skyPlusEarth,
      });
    }

    if (matrixType === "compatible" && props.type === "social") {
      setLabel("Partenariato:");
      setCircles({
        circle1: compatibleMatrixTable.male,
        circle2: compatibleMatrixTable.female,
        circle3: compatibleMatrixTable.malePlusFemale,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrixType, props.type]);

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
