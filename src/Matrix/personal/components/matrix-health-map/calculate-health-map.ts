import { calculateNumber } from "../../../../utils/calculate-matrix";

// type HealthMapItemName =
//   | "Sahasrara"
//   | "Ajna"
//   | "Vishudha"
//   | "Anahata"
//   | "Manipura"
//   | "Swadhisthana"
//   | "Muladhara"
//   | "Generale:";

// type HealthMapItemSubName =
//   | "(Energia vitale, intelligenza)"
//   | "(Occhio energetico)"
//   | "(Destino)"
//   | "(Energia della creatività)"
//   | "(Energia vitale cosmica)"
//   | "(Energia dell'amore e della gioia)"
//   | "(Corpo)"
//   | "";

export enum ChacraTypes {
  chacra1,
  chacra2,
  chacra3,
  chacra4,
  chacra5,
  chacra6,
  chacra7,
  chacra8,
}

interface HealthMapItem {
  chacraType: ChacraTypes;
  physics: number;
  energy: number;
  emotion: number;
}

interface HealthMapArgs {
  a1: number;
  b1: number;
  a2: number;
  b2: number;
  a3: number;
  b3: number;
  a4: number;
  b4: number;
  centerNumber: number;
  c3: number;
  d3: number;
  c1: number;
  d1: number;
}

export const calculateHealthMap = ({
  a1,
  a2,
  a3,
  a4,
  b1,
  b2,
  b3,
  b4,
  centerNumber,
  c1,
  c3,
  d1,
  d3,
}: HealthMapArgs): HealthMapItem[] => [
  {
    chacraType: ChacraTypes.chacra1,
    physics: a1,
    energy: b1,
    emotion: calculateNumber(a1 + b1),
  },
  {
    chacraType: ChacraTypes.chacra2,
    physics: a2,
    energy: b2,
    emotion: calculateNumber(a2 + b2),
  },
  {
    chacraType: ChacraTypes.chacra3,
    physics: a3,
    energy: b3,
    emotion: calculateNumber(a3 + b3),
  },
  {
    chacraType: ChacraTypes.chacra4,
    physics: a4,
    energy: b4,
    emotion: calculateNumber(a4 + b4),
  },
  {
    chacraType: ChacraTypes.chacra5,
    physics: centerNumber,
    energy: centerNumber,
    emotion: calculateNumber(centerNumber + centerNumber),
  },
  {
    chacraType: ChacraTypes.chacra6,
    physics: c3,
    energy: d3,
    emotion: calculateNumber(d3 + c3),
  },
  {
    chacraType: ChacraTypes.chacra7,
    physics: c1,
    energy: d1,
    emotion: calculateNumber(c1 + d1),
  },
  {
    chacraType: ChacraTypes.chacra8,
    physics: calculateNumber(a1 + a2 + a3 + a4 + centerNumber + c3 + c1),
    energy: calculateNumber(b1 + b2 + b3 + b4 + +centerNumber + d3 + d1),
    emotion: 1,
  },
];
