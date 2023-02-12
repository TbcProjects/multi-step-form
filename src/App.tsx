import { AppContextProvider } from "./utils/context";
import FormContainer from "./components/multiStepForm/FormContainer";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <AppContextProvider>
      <FormContainer />
    </AppContextProvider>
  );
}

export default App;
