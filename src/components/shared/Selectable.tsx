import { useContext } from "react";
import { StateContext } from "../../utils/context";
import { State } from "../../types";

import { Box, Checkbox, Text, Flex } from "@chakra-ui/react";

interface SelectableProps {
  layerStyles: any;
  onChange: (e: any) => void;
  isChecked: boolean;
  title: string;
  description: string;
  cost_monthly: number;
  cost_yearly: number;
}

export default function Selectable({
  layerStyles,
  onChange,
  isChecked,
  title,
  description,
  cost_monthly,
  cost_yearly,
}: SelectableProps) {
  const state = useContext(StateContext) as State;

  return (
    <Checkbox
      type={"checkbox"}
      isChecked={isChecked}
      onChange={onChange}
      layerStyle={layerStyles}
      mb="12px"
      borderRadius="8px"
      paddingX={4}
      paddingY={3}
      minW={295}
      sx={{
        "& > .chakra-checkbox__label": {
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "space-between",
          width: "100%",
          marginLeft: "0",
        },
        "& >.chakra-checkbox__control": {
          height: "22px",
          width: "22px",
        },
        "& >.chakra-checkbox__control[data-checked]": {
          bg: "blueRibbon",
          border: "blueRibbon",
        },
      }}
    >
      <Flex justify="space-between" px="16px" align="center">
        <Box textAlign={"left"}>
          <Text>{title}</Text>
          <Text fontSize={"12px"}>{description}</Text>
        </Box>
        <Text>{state.isYearly ? cost_monthly : cost_yearly}</Text>
      </Flex>
    </Checkbox>
  );
}

{
  /* <Box  key={title}>
        <Box display="flex" alignItems="center" p="16px">
          <Box ml="14px">
            
          </Box>
        </Box>
      </Box> */
}
