import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      as="main"
      display={{ base: "flex" }}
      flexDirection="column"
      justifyContent="space-between"
      height={"100vh"}
      position="relative"
      bg={"#EFF5FF"}
      minH="667px"
    >
      {children}
    </Box>
  );
}
