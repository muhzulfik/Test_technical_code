import { extendTheme } from "@chakra-ui/react";

import colors from "./foundation/colors";
import fonts from "./foundation/fonts";
import textStyles from "./foundation/typography";
import Button from "./components/Button";
import Input from "./components/Input";

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Input,
  },
});

export default theme;
