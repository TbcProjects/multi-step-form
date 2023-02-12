import { Actions, ActionType, State } from "../types";
import { ImmerReducer } from "use-immer";
import { Draft } from "immer";

export const initialState: State = {
  profile: {},
  selectedPlan: {},
  addOns: [],
  summary: [],
  currentStep: 0,
  hasConfirmed: false,
  isMonthly: false,
};

export const reducer: ImmerReducer<State, Actions> = (
  draft: Draft<State>,
  action: Actions
) => {
  switch (action.type) {
    case ActionType.CREATE_PROFILE:
      draft.profile = action.payload;
      break;
    case ActionType.NEXT_STEP:
      draft.currentStep += 1;
      break;
    case ActionType.SET_PLAN:
      draft.selectedPlan = action.payload;
      break;
  }
};
