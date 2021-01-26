import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    overflowY: "scroll",
    height: "80vh",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  form: {
    margin: 5,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));
