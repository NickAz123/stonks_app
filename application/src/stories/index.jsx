import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "@material-ui/core/Button";

import "../globalStyleOverride.css";

storiesOf("Button", module)
  .add("Base", () => <Button>Base</Button>);