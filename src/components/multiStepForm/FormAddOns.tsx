import { Dispatch, useContext } from "react";
import { DispatchContext, StateContext } from "../../utils/context";
import { Actions, ActionType, State } from "../../types";

import content from "../../assets/content/data.json";

import FormHeader from "../shared/Header";

import { Box, Text } from "@chakra-ui/react";

export default function FormAddOns() {
  const { addOns } = content;

  const renderAddons = addOns.map(addOn => {
    const { title, description, cost } = addOn;
    return (
      <Box key={title}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{cost}</Text>
      </Box>
    );
  });

  return (
    <>
      <FormHeader
        heading="Pick add-ons"
        subHeading="Add-ons help enhance your gaming experience."
      />
      {renderAddons}
    </>
  );
}
