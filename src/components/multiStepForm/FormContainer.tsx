import { useContext } from "react";
import { StateContext } from "../../utils/context";
import { State } from "../../types";

import FormProfile from "./FormProfile";
import FormPlan from "./FormPlan";
import FormAddOns from "./FormAddOns";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import { Box } from "@chakra-ui/react";

type MultiStepFormProps = {};

const renderSteps = (currentStep: number) => {
  switch (currentStep) {
    case 0:
      return <FormProfile />;
    case 1:
      return <FormPlan />;
    case 2:
      return <FormAddOns />;
  }
};

export default function FormContainer({}: MultiStepFormProps) {
  const state = useContext(StateContext) as State;

  return (
    <Box
      display="flex"
      flexDir="column"
      pos="relative"
      bg="#EFF5FF"
      h={"100vh"}
    >
      <Header />
      <Box
        bg="white"
        maxW="343px"
        m=" auto"
        padding="32px 24px 16px"
        borderRadius="md"
      >
        {renderSteps(state.currentStep)}
      </Box>

      <Footer />
    </Box>
  );
}
