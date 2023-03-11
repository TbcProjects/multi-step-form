import { useContext } from "react";
import { State } from "../../types";
import { StateContext } from "../../utils/context";

import { Box } from "@chakra-ui/react";
import Button from "../shared/Button";

interface FromProgressionControlProps {
  handlers: {
    handleSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleNextStep?: () => void;
    handleBackStep?: () => void;
  };
}

export default function FromProgressionControl({
  handlers,
}: FromProgressionControlProps) {
  const state = useContext(StateContext) as State;

  const { handleSubmit, handleNextStep, handleBackStep } = handlers;

  return (
    <Box minH="72px" bg="#fff">
      <Box
        display="flex"
        justifyContent={state.currentStep === 0 ? "end" : "space-between"}
        maxW="342px"
        margin="0 auto"
        py="16px"
      >
        {state.currentStep >= 1 ? (
          <Button label="Back" onClick={handleBackStep} />
        ) : null}
        {state.currentStep === 0 ? (
          <Button
            label="Submit"
            onClick={handleSubmit}
            variant="primary"
            order="2"
          />
        ) : (
          <Button
            label={state.currentStep !== 3 ? "Next Step" : "Confirm"}
            variant="primary"
            onClick={handleNextStep}
          />
        )}
      </Box>
    </Box>
  );
}
