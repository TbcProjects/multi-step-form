import { IconProps, OmitCommonProps } from "@chakra-ui/react";
import { ReactNode, SVGProps, Reducer } from "react";
import { ImmerReducer } from "use-immer";

export interface AppContextProviderProps {
  children: ReactNode;
}

export enum ActionType {
  CREATE_PROFILE,
  NEXT_STEP,
  BACK_STEP,
  SET_PLAN,
  ADD_ADDON,
  REMOVE_ADDON,
  SET_IS_YEARLY,
}

export type CreateProfile = {
  type: ActionType.CREATE_PROFILE;
  payload: Profile;
};

export type NextStep = {
  type: ActionType.NEXT_STEP;
};

export type BackStep = {
  type: ActionType.BACK_STEP;
};

export type SetPlan = {
  type: ActionType.SET_PLAN;
  payload: SelectedPlan | {};
};

export type SetAddOns = {
  type: ActionType.ADD_ADDON;
  payload: SelectedAddOn | [];
};

export type RemoveAddOn = {
  type: ActionType.REMOVE_ADDON;
  payload: SelectedAddOn;
};

export type SetIsYearly = {
  type: ActionType.SET_IS_YEARLY;
};

export type Actions =
  | CreateProfile
  | NextStep
  | BackStep
  | SetPlan
  | SetAddOns
  | RemoveAddOn
  | SetIsYearly;

export type Profile = {
  name: string;
  email: string;
  phone: string;
};

export type SelectedPlan = {
  title: string;
  icon: ReactNode;
  cost_monthly: number;
  cost_yearly: number;
};

export type SelectedAddOn = {
  id: number;
  title: string;
  description: string;
  cost_monthly: number;
  cost_yearly: number;
};

export interface State {
  profile: Profile | {};
  selectedPlan: SelectedPlan | { [key: string]: string };
  addOns: SelectedAddOn[] | [];
  summary: string[];
  currentStep: number;
  hasConfirmed: boolean;
  isYearly: boolean;
}

export type StateContextType = State | {};
export type DispatchContextType = ImmerReducer<State, any> | {};
export type AppContextType = unknown | {};

export type CustomIconProps = JSX.IntrinsicAttributes &
  OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
  IconProps & { as?: "svg" | undefined };
