import { Dispatch, ReactNode, useContext } from "react";
import { Box, Card as FormCard, CardBody, Text } from "@chakra-ui/react";
import { DispatchContext, StateContext } from "../../utils/context";
import { Actions, ActionType, State } from "../../types";
/**
 * Decide on wether to use chakra UI 'card' or create a custom card component
 */

type CardProps = {
  title: string;
  icon: ReactNode;
  cost: number;
};

export default function Card({ title, icon, cost }: CardProps) {
  const state = useContext(StateContext) as State;
  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;

  const layerStyles =
    state.selectedPlan.title === title ? "cardSelected" : "cardBase";

  return (
    <Box
      layerStyle={layerStyles}
      mb="12px"
      borderRadius="8px"
      key={title}
      onClick={() => {
        dispatch({
          type: ActionType.SET_PLAN,
          payload: { title, icon, cost },
        });
      }}
    >
      <Box display="flex" alignItems="center" p="16px">
        {icon}
        <Box ml="14px">
          <Text>{title}</Text>
          <Text>${cost}/mo</Text>
        </Box>
      </Box>
    </Box>
  );
}
