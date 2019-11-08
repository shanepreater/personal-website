import { createMuiTheme } from "@material-ui/core";
import { deepOrange, green, indigo } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
    primaryText: "white"
  },
  status: {
    danger: deepOrange
  }
});
