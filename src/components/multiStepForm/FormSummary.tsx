import { useContext } from "react";
import { StateContext } from "../../utils/context";

import { State } from "../../types";

import Header from "../shared/Header";

import { Box, HStack, Text, Divider } from "@chakra-ui/react";

type FormSummaryProps = {};

export default function FormSummary({}: FormSummaryProps) {
  const state = useContext(StateContext) as State;

  return (
    <>
      <Header
        heading="Finishing up"
        subHeading="Double-check everything looks OK before confirming."
      />
      <Box bg="#F8F9FF" padding="13px">
        <HStack justify="space-between" pb="12px">
          <Box>
            <Text>{state.selectedPlan.title} (Monthly)</Text>
            <Text>Change</Text>
          </Box>
          <Box>$9/mo</Box>
        </HStack>
        <Divider />

        {state.addOns.length > 0 &&
          state.addOns.map(item => {
            return (
              <HStack key={item.id} justify="space-between">
                <Box py="12px">{item.title}</Box>
                <Box py="12px">
                  +${state.isYearly ? item.cost_monthly : item.cost_yearly}/mo
                </Box>
              </HStack>
            );
          })}
      </Box>
      <HStack justify="space-between">
        <Box py="12px"></Box>
        {/* <Box py="12px">+${totalCost()}/mo</Box> */}
      </HStack>
      <Text></Text>
    </>
  );
}
