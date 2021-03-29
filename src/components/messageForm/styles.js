import { makeStyles } from "@material-ui/styles";
import { colors } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "70%",
  },
  radios: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "25%",
    color: theme.palette.yellow,
  },
  divider: {
    width: 2,
    height: 30,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    backgroundColor: colors.grey[200],
  },
}));
