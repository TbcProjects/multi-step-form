import { IconProps, OmitCommonProps } from "@chakra-ui/react";
import { ReactNode, SVGProps, Reducer } from "react";
import { ImmerReducer } from "use-immer";

export interface AppContextProviderProps {
  children: ReactNode;
}

export enum ActionType {
  CREATE_PROFILE,
  NEXT_STEP,
  SET_PLAN,
}

export type CreateProfile = {
  type: ActionType.CREATE_PROFILE;
  payload: Profile;
};

export type NextStep = {
  type: ActionType.NEXT_STEP;
};

export type SetPlan = {
  type: ActionType.SET_PLAN;
  payload: SelectedPlan | {};
};

export type Actions = CreateProfile | SetPlan | NextStep;

export type Profile = {
  name: string;
  email: string;
  phone: string;
};

export type SelectedPlan = {
  title: string;
  icon: ReactNode;
  cost: number;
};

export type AddOns = {
  title: string;
  description: string;
  cost: number;
};

export interface State {
  profile: Profile | {};
  selectedPlan: SelectedPlan | { [key: string]: string };
  addOns: AddOns[] | [];
  summary: string[];
  currentStep: number;
  hasConfirmed: boolean;
  isMonthly: boolean;
}

export type StateContextType = State | {};
export type DispatchContextType = ImmerReducer<State, any> | {};
export type AppContextType = unknown | {};

export type CustomIconProps = JSX.IntrinsicAttributes &
  OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
  IconProps & { as?: "svg" | undefined };
