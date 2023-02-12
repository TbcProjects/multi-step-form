import { createContext } from "react";
import { useImmerReducer } from "use-immer";

import {
  StateContextType,
  DispatchContextType,
  AppContextType,
  AppContextProviderProps,
} from "../types";

import { initialState, reducer } from "./reducer";

export const StateContext = createContext<StateContextType>({});
export const DispatchContext = createContext<DispatchContextType>({});
export const AppContext = createContext<AppContextType>({});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <AppContext.Provider value={{}}>{children}</AppContext.Provider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
