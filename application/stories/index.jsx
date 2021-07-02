import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";


import Button from "@material-ui/core/Button";


// Import global styling overrides aka our theme
import "../src/globalStyleOverride.css";


storiesOf("Button", module)
  .add("Base", () => <StylesProvider injectFirst><Button>Base</Button></StylesProvider>);