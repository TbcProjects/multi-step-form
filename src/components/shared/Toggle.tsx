import { useState, useContext, Dispatch } from "react";
import { DispatchContext } from "../../utils/context";
import { Actions, ActionType } from "../../types";

import { Stack, Box, Text, Switch } from "@chakra-ui/react";

interface ToggleProps {}

export default function Toggle({}: ToggleProps) {
  const [toggle, setToggle] = useState(true);

  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;

  const handleChange = () => {
    dispatch({ type: ActionType.SET_IS_YEARLY });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      bg="#F8F9FF"
      borderRadius="8px"
      width="100%"
      minH="48px"
    >
      <Stack direction="row" alignItems="center">
        <Text
          mr="14px"
          textAlign="center"
          color={toggle ? "blackAlpha.900" : "gray.500"}
        >
          Monthly
        </Text>

        <Switch
          onChange={handleChange}
          colorScheme="teal"
          sx={{ "& > .chakra-switch__track ": { backgroundColor: "#022959" } }}
        />

        <Text
          textAlign="center"
          ml="14px"
          color={!toggle ? "blackAlpha.900" : "gray.500"}
        >
          Yearly
        </Text>
      </Stack>
    </Box>
  );
}
