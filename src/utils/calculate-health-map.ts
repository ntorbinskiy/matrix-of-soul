import { calculateNumber } from "./calculate-matrix";

type HealthMapItemName =
  | "Sahasrara"
  | "Ajna"
  | "Vishudha"
  | "Anahata"
  | "Manipura"
  | "Swadhisthana"
  | "Muladhara"
  | "Generale:";

type HealthMapItemSubName =
  | "(Energia vitale, intelligenza)"
  | "(Occhio energetico)"
  | "(Destino)"
  | "(Energia della creatività)"
  | "(Energia vitale cosmica)"
  | "(Energia dell'amore e della gioia)"
  | "(Corpo)"
  | "";

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
    color: "rgb(120, 234, 234)",
    name: "Vishudha",
    subName: "(Destino)",
    physics: a3,
    energy: b3,
    emotion: calculateNumber(a3 + b3),
  },
  {
    color: "rgb(165, 239, 119)",
    name: "Anahata",
    subName: "(Energia della creatività)",
    physics: a4,
    energy: b4,
    emotion: calculateNumber(a4 + b4),
  },
  {
    color: "rgb(248, 233, 103)",
    name: "Manipura",
    subName: "(Energia vitale cosmica)",
    physics: centerNumber,
    energy: centerNumber,
    emotion: calculateNumber(centerNumber + centerNumber),
  },
  {
    color: "rgb(251, 170, 75)",
    name: "Swadhisthana",
    subName: "(Energia dell'amore e della gioia)",
    physics: c3,
    energy: d3,
    emotion: calculateNumber(d3 + c3),
  },
  {
    color: "rgb(245, 69, 69)",
    name: "Muladhara",
    subName: "(Corpo)",
    physics: c1,
    energy: d1,
    emotion: calculateNumber(c1 + d1),
  },
  {
    color: "transparent",
    name: "Generale:",
    subName: "",
    physics: calculateNumber(a1 + a2 + a3 + a4 + centerNumber + c3 + c1),
    energy: calculateNumber(b1 + b2 + b3 + b4 + +centerNumber + d3 + d1),
    emotion: 1,
  },
];
