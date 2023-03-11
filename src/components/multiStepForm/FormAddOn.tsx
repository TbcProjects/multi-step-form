import { Dispatch, useContext } from "react";
import { DispatchContext, StateContext } from "../../utils/context";
import { Actions, ActionType, State, SelectedAddOn } from "../../types";

import content from "../../assets/content/data.json";

import Header from "../shared/Header";
import Selectable from "../shared/Selectable";

export default function FormAddOn() {
  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;
  const state = useContext(StateContext) as State;
  const { addOns } = content;

  const renderAddons = addOns.map(addOn => {
    const { id, title, description, cost_monthly, cost_yearly } = addOn;

    const addOnValue: SelectedAddOn = {
      id,
      title,
      description,
      cost_monthly,
      cost_yearly,
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const checked = e.target.checked;

      checked
        ? dispatch({ type: ActionType.ADD_ADDON, payload: addOnValue })
        : dispatch({ type: ActionType.REMOVE_ADDON, payload: addOnValue });
    }

    const checkSelected = (value: SelectedAddOn) => value.id === addOnValue.id;

    const layerStyles = state.addOns.some(checkSelected)
      ? "cardSelected"
      : "cardBase";

    return (
      <Selectable
        key={title}
        title={title}
        description={description}
        cost_monthly={cost_monthly}
        cost_yearly={cost_yearly}
        layerStyles={layerStyles}
        isChecked={state.addOns.some(checkSelected)}
        onChange={e => handleChange(e)}
      />
    );
  });

  return (
    <>
      <Header
        heading="Pick add-ons"
        subHeading="Add-ons help enhance your gaming experience."
      />
      {renderAddons}
    </>
  );
}
