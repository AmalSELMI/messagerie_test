import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  small: {
    width: "10%",
  },
  medium: {
    width: "50%",
  },
  messages: {
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2),
  },
  private: {
    backgroundColor: theme.palette.greys[1],
  },
  public: {
    backgroundColor: theme.palette.greys[0],
  },
}));
