import { Button as FormButton } from "@chakra-ui/react";
type ButtonProps = {
  label: string;
  [x: string]: any;
};

export default function Button({ label, ...restProps }: ButtonProps) {
  return <FormButton {...restProps}>{label}</FormButton>;
}
