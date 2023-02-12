import { Dispatch, useContext } from "react";
import { DispatchContext, StateContext } from "../../utils/context";
import { Actions, ActionType, SelectedPlan, State } from "../../types";

import { isEmpty } from "../../utils/helpers";

import content from "../../assets/content/data.json";

import FormHeader from "../shared/Header";
import Card from "../shared/Card";
import Button from "../shared/Button";
import AdvancedIcon from "../shared/icons/AdvancedIcon";
import ArcadeIcon from "../shared/icons/ArcadeIcon";
import ProIcon from "../shared/icons/ProIcon";

export default function PlanForm() {
  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;
  const state = useContext(StateContext) as State;
  const { plans } = content;

  const renderIcon = (iconType: string): JSX.Element => {
    switch (iconType) {
      case "joy-stick":
        return <ArcadeIcon width="40px" height="40px" />;
      case "small-controller":
        return <AdvancedIcon width="40px" height="40px" />;
      case "large-controller":
        return <ProIcon width="40px" height="40px" />;
      default:
        return <></>;
    }
  };

  const renderPlans = plans.map(plan => {
    const { title, icon, cost } = plan;
    // @TODO - add an id prop to plan data
    return (
      <Card key={title} title={title} icon={renderIcon(icon)} cost={cost} />
    );
  });

  function handleClick() {
    if (!isEmpty(state.selectedPlan)) {
      dispatch({ type: ActionType.NEXT_STEP });
    } else {
      return;
    }
  }

  return (
    <>
      <FormHeader
        heading="Select your plan"
        subHeading="You have the option of monthly or yearly billing."
      />
      {renderPlans}

      <Button label="NextStep" onClick={handleClick} variant="primary"></Button>
    </>
  );
}
