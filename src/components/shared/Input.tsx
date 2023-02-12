import { ErrorMessage, useField, FieldHookConfig } from "formik";
import {
  HStack,
  FormControl,
  FormLabel,
  Input as FormInput,
  Box,
  Text,
} from "@chakra-ui/react";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

export default function Input({ label, ...props }: InputProps) {
  const [field, meta] = useField(props);
  const touched = meta.error && meta.touched ? true : false;

  const ErrorComponent = (props: any) => {
    return <Box color="red" fontSize="14px" fontWeight="bold" {...props} />;
  };

  return (
    <FormControl
      isInvalid={touched}
      mb="16px"
      sx={{
        "#text": {
          color: "red",
        },
      }}
    >
      <HStack justify="space-between" alignItems="baseline">
        <FormLabel fontSize="14px">{label}</FormLabel>
        <ErrorMessage component={ErrorComponent} name={props.name} />
      </HStack>
      <FormInput {...field} {...props} />
    </FormControl>
  );
}
