import * as Yup from "yup";
import { Formik, Form } from "formik";

import FormButton from "../shared/Button";
import FormHeader from "../shared/Header";
import Input from "../shared/Input";

import { Dispatch, useContext } from "react";
import { DispatchContext } from "../../utils/context";
import { ActionType, Actions } from "../../types";

export default function ProfileForm() {
  const dispatch = useContext(DispatchContext) as Dispatch<Actions>;

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
      {values => {
        const { handleSubmit } = values;
        return (
          <>
            <FormHeader
              heading="Personal info"
              subHeading="Please provide your name, email address, and phone number."
            />
            <Form>
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="e.g. Steven King"
              />
              <Input
                label="Email address"
                name="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="e.g. +1 234 567 890"
              />
            </Form>

            <FormButton
                label="Submit"
                onClick={handleSubmit}
                variant="primary"
              />
          </>
        );
      }}
    </Formik>
  );
}
