import { Box, Text } from "@chakra-ui/react";

type FormHeaderProps = {
  heading: string;
  subHeading: string;
};

export default function FormHeader({ heading, subHeading }: FormHeaderProps) {
  return (
    <Box>
      <Text as="h2" fontWeight={"bold"} fontSize={"24px"} mb="9px">
        {heading}
      </Text>
      <Text mb="22px">{subHeading}</Text>
    </Box>
  );
}
