import { FC, createContext, useContext, useMemo, useState } from "react";

export interface Props {
  children: React.ReactNode;
}

export type MatrixType = "personal" | "compatible";

interface State {
  personalName: string;
  personalDate: string;
  partnerName: string;
  partnerDate: string;
  matrixType: MatrixType;
  setData: React.Dispatch<React.SetStateAction<Omit<State, "setData">>>;
}

const initialState: State = {
  personalName: "Test user",
  personalDate: "11/11/1111",
  partnerName: "Partner",
  partnerDate: "22/22/2022",
  matrixType: "personal",
  setData: () => {},
};

const StateContext = createContext<State>(initialState);

export const StateProvider: FC<Props> = (props) => {
  const [data, setData] = useState<Omit<State, "setData">>(initialState);

  const memoizedData: State = useMemo(
    () => ({ ...data, setData }),
    [data, setData]
  );

  return (
    <StateContext.Provider value={memoizedData}>
      {props.children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = (): State => {
  const {
    personalName,
    personalDate,
    setData,
    matrixType,
    partnerName,
    partnerDate,
  } = useContext(StateContext);

  return {
    personalName,
    personalDate,
    setData,
    matrixType,
    partnerDate,
    partnerName,
  };
};
