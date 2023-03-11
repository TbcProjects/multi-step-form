import { useContext } from "react";
import { StateContext } from "../../utils/context";
import { State } from "../../types";

import { Box, Flex } from "@chakra-ui/react";
import img from "../../assets/images/bg-sidebar-mobile.svg";
import ProgressOne from "../shared/icons/ProgressOne";
import ProgressTwo from "../shared/icons/ProgressTwo";
import ProgressThree from "../shared/icons/ProgressThree";
import ProgressFour from "../shared/icons/ProgressFour";

type FormProgressPanelProps = {};

export default function FormProgressPanel({}: FormProgressPanelProps) {
  const state = useContext(StateContext) as State;

  return (
    <Box bgImage={img} bgSize="cover" minH="172px">
      <Flex maxW="180px" justify="space-between" margin="0 auto" pt="32px">
        <ProgressOne
          width="33"
          height="33"
          selected={state.currentStep === 0 ? true : false}
        />
        <ProgressTwo
          width="33"
          height="33"
          selected={state.currentStep === 1 ? true : false}
        />
        <ProgressThree
          width="33"
          height="33"
          selected={state.currentStep === 2 ? true : false}
        />
        <ProgressFour
          width="33"
          height="33"
          selected={state.currentStep >= 3 ? true : false}
        />
      </Flex>
    </Box>
  );
}
