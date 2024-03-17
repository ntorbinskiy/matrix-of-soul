import { FC, createContext, useContext, useMemo, useState } from "react";
import { State } from "../App";

export interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  globalName: "Test user",
  globalDate: "11/11/1111",
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
  const { globalName, globalDate, setData } = useContext(StateContext);

  return { globalName, globalDate, setData };
};
