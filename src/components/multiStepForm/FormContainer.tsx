import { Dispatch, useContext } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { isEmpty } from "../../utils/helpers";

import { DispatchContext, StateContext } from "../../utils/context";
import { ActionType, Actions, State } from "../../types";

import FormProfile from "./FormProfile";
import FormPlan from "./FormPlan";
import FormAddOn from "./FormAddOn";
import FormSummary from "./FormSummary";
import FormProgressPanel from "./FormProgressPanel";
import FormProgressionControl from "./FromProgressionControl";
import FormConfirmation from "./FormConfirmation";

import { Box } from "@chakra-ui/react";

type FormContainerProps = {};

const renderSteps = (currentStep: number) => {
  switch (currentStep) {
    case 0:
      return <FormProfile />;
    case 1:
      return <FormPlan />;
    case 2:
      return <FormAddOn />;
    case 3:
      return <FormSummary />;
    case 4:
      return <FormConfirmation />;
  }
};

export default function FormContainer({}: FormContainerProps) {
  const state = useContext(StateContext) as State;
  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;

  function handleNextStep() {
    if (!isEmpty(state.selectedPlan)) {
      dispatch({ type: ActionType.NEXT_STEP });
    } else {
      return;
    }
  }

  function handleBackStep() {
    if (state.currentStep != 0) {
      dispatch({ type: ActionType.BACK_STEP });
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        phone: Yup.number().min(8).required("A phone number is required"),
      })}
      onSubmit={values => {
        dispatch({
          type: ActionType.CREATE_PROFILE,
          payload: {
            name: values.name,
            email: values.email,
            phone: values.phone,
          },
        });
        dispatch({ type: ActionType.NEXT_STEP });
      }}
    >
      {value => {
        const { handleSubmit } = value;

        const handlers = {
          handleSubmit,
          handleNextStep,
          handleBackStep,
        };

        return (
          <>
            <FormProgressPanel />
            <Box
              pos="absolute"
              mx="auto"
              left="0"
              right="0"
              top="104px"
              bg="white"
              maxW="343px"
              m=" auto"
              padding="32px 24px 16px"
              borderRadius="md"
            >
              {renderSteps(state.currentStep)}
            </Box>
            <FormProgressionControl handlers={handlers} />
          </>
        );
      }}
    </Formik>
  );
}
