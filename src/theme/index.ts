import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./styles";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontSizes from "./foundations/fontSizes";
import layerStyles from "./foundations/layerStyles";
import sizes from "./foundations/sizes";
import textStyles from "./foundations/textStyles";
import { FormErrorMessage } from "./components/ErrorMessage";
import Button from "./components/Button";

const overrides = {
  config,
  styles,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  layerStyles,
  sizes,
  textStyles,
  components: {
    FormErrorMessage,
    Button,
  },
};

const appTheme = extendTheme(overrides);

export default appTheme;
