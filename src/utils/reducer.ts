import { Actions, ActionType, SelectedAddOn, State } from "../types";
import { ImmerReducer } from "use-immer";
import { Draft } from "immer";

export const initialState: State = {
  profile: {},
  selectedPlan: {},
  addOns: [],
  summary: [],
  currentStep: 0,
  hasConfirmed: false,
  isYearly: true,
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
      if (draft.currentStep > 3) {
        return;
      } else {
        draft.currentStep += 1;
      }
      break;
    case ActionType.BACK_STEP:
      draft.currentStep -= 1;
      break;
    case ActionType.SET_PLAN:
      draft.selectedPlan = action.payload;
      break;
    case ActionType.ADD_ADDON:
      draft.addOns.push(action.payload as never);
      break;
    case ActionType.REMOVE_ADDON:
      draft.addOns = draft.addOns.filter(
        addon => addon.id !== action.payload.id
      );
  }
};
