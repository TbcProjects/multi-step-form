import { Box, Text } from "@chakra-ui/react";

type FormConfirmationProps = {};

export default function FormConfirmation({}: FormConfirmationProps) {
  return (
    <>
      <Box textAlign="center">
        <Text fontSize="24px" fontWeight="bold">Thank you</Text>
        <Text>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Text>
      </Box>
    </>
  );
}
