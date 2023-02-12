import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    
  },
  variants: {
    primary: {
      backgroundColor: "blue",
      color: "white",
    },
  },
});

export default Button;
