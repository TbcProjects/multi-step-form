import { AppContextProvider } from "./utils/context";
import FormContainer from "./components/multiStepForm/FormContainer";
import Layout from "./components/layout/Layout";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <FormContainer />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
