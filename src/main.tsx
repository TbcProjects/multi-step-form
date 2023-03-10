import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import appTheme from "./theme/index";
import "@fontsource/ubuntu";


import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
